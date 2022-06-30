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
    private blocks: Block[]
    constructor(){
        this.blocks = []
    }

    

    public addBlock(data:string){

    }
}