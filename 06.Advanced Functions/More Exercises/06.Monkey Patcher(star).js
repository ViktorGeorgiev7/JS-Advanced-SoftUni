function solution(action){
    let totalVotes= this.upvotes + this.downvotes;
    let obfuscateVotes = ()=>{
        if (this.upvotes>this.downvotes) {
            return {upvotes:Math.ceil(this.upvotes*1.25),downvotes:Math.ceil(this.downvotes+ this.upvotes*0.25)};
        }
        else if(this.downvotes>this.upvotes) {
            return {upvotes:Math.ceil(this.upvotes+this.downvotes*0.25),downvotes:Math.ceil(this.downvotes*1.25)}
        }
        else{return {upvotes:Math.ceil(this.upvotes*1.25),downvotes:Math.ceil(this.downvotes*1.25)}}
    }
    let getRating = () =>{
        let ratingPercentage = (this.upvotes/totalVotes);
        if(ratingPercentage>0.66){
            return 'hot';
        }
        else if(ratingPercentage>=0.50 && totalVotes>100){
            return 'controversial'
        }
        else if(totalVotes<10){
            return 'new';
        }
        else{
            return 'unpopular';
        }
    };
    if (action == 'upvote') {
        this.upvotes++;
    }
    else if(action == 'downvote'){
        this.downvotes++;
    }
    else{
        let obfuscatedVotes = obfuscateVotes();
        let getRated = getRating();
        return [obfuscatedVotes.downvotes,obfuscatedVotes.upvotes,obfuscatedVotes.upvotes-obfuscatedVotes.downvotes,getRated]
    }
}
let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
for (let i = 0; i <= 50; i++) {
    solution.call(post, 'downvote'); 
}        // (executed 50 times)
score = solution.call(post, 'score');     