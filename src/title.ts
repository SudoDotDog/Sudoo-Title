/**
 * @author WMXPY
 * @namespace Title
 * @description Title
 */

import { getDefaultSetTitleFunction, getDefaultTitle, SetTitleFunction } from "./declare";

export class Title {

    public static create(
        init: string = getDefaultTitle(),
        setTitleFunction: SetTitleFunction = getDefaultSetTitleFunction(),
    ): Title {

        return new Title(init, setTitleFunction);
    }

    private _init: string;
    private _setTitleFunction: SetTitleFunction;

    private _base: string | null;

    private constructor(init: string, setTitleFunction: SetTitleFunction) {

        this._init = init;
        this._setTitleFunction = setTitleFunction;

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

        const title: string = this._buildTitle(args);
        this._setTitleFunction(title);
        return this;
    }

    public restoreTitle(): this {

        this._setTitleFunction(this._init);
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
