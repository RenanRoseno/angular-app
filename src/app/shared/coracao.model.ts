export class Coracao {
    constructor(
        public cheio: boolean,
        public urlCoracaoCheio: string = '../../assets/coracao_cheio.svg',
        public urlCoracaoVazio: string = '../../assets/coracao_vazio.svg'
    ) { }

    public exibeCoracao(): string {
        if (this.cheio)
            return this.urlCoracaoCheio
        return this.urlCoracaoVazio
    }

    public getTamanhoImg(): string {
        if (this.cheio)
            return '30';
        return '38';
    }
}