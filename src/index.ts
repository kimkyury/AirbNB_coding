import crypto from "crypto";

interface BlockShape {
    hash: string; // 이 값은 prevHash, height, data에 이용해서 계산된다
    prevHash: string; // 이전 해쉬 값
    height: number; // 블록의 위치 표시
    data: string;  //  블록의 데이터
}

class Block implements BlockShape {
    public hash: string;
    constructor(
        public prevHash: string,
        public height: number,
        public data: string,
    ) {
        this.hash = Block.calculateHash(prevHash, height, data);
    }

    static calculateHash(prevHash:string, height:number, data:string) {
        const toHash = `${prevHash}${height}${data}`
        // createHash("") 해쉬 알고리즘 선택
        // update("") 생성된 해시의 암호데이터 삽입, 암호 타입이 string인 경우 자동 utf8적용
        // digest("") 해쉬표기법 선택
        return crypto.createHash("sha256").update(toHash).digest("hex");
    }
} 

class Blockchain {
    private blocks: Block[];
    constructor(){
        this.blocks = [];
    }

    // Block의 이전의 마지막 hash값을 리턴
    private getPrevHash() {
        if(this.blocks.length === 0) return "";
        return this.blocks[this.blocks.length-1].hash;
    }
    
    // Block에 chain 추가
    public addBlock(data:string){
        const newBlock = new Block(this.getPrevHash(), this.blocks.length +1,data);
        this.blocks.push(newBlock);
    }
    
    // block 정보 접근
    public getBlocks() {
        // 보안을 위하여 아예 새로운 배열을 리턴하는 방식으로 접근 허용
        return [...this.blocks];
    }
}


const blockchain = new Blockchain();
blockchain.addBlock("fisrt");
blockchain.addBlock("second");
blockchain.addBlock("third");

// 해킹시도: 해킹이 되었다면 새로운 블록이 추가된 상태로 log가 찍혀야한다
blockchain.getBlocks().push(new Block("xxxx",  111, "TRY-HACKED"))
// getBlock 함수에서 아예 새로운 배열을 리턴받았으므로, 원본의 변경은 일어나지 않았다
console.log(blockchain.getBlocks());
