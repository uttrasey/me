export default class Server {

    here() {
        console.log('gooing');
    }

    go() {
        const x  = ::this.here;
        x();
    }

}
