/**
 * @author WMXPY
 * @namespace Title
 * @description Title
 */

export class Title {

    public static create(init: string = document.title): Title {

        return new Title(init);
    }

    private _init: string;

    private _base: string | null;

    private constructor(init: string) {

        this._init = init;

        this._base = null;
    }

    public get base(): string {
        return this._base || '';
    }
    public get init(): string {
        return this._init;
    }

    public setInit(init: string): this {

        this._init = init;
        return this;
    }

    public setBase(base: string): this {

        this._base = base;
        return this;
    }

    public setTitle(...args: string[]): this {

        document.title = this._buildTitle(args);
        return this;
    }

    public restoreTitle(): this {

        document.title = this._init;
        return this;
    }

    private _buildTitle(args: string[]): string {

        if (this._base) {
            args.reduce((previous: string, current: string) => {
                return previous.replace("{}", current);
            }, this._base);
        }

        return args.join(' ');
    }
}
