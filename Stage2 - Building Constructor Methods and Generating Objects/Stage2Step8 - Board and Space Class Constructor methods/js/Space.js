class Space {
    constructor(x, y) {
        this.x = x; // row
        this.y = y; // column
        this.id = `space-${x}-${y}`
        this.token = null;
    }
}