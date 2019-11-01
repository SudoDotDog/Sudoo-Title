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

    private readonly _levelBaseMap: Map<number, string>;
    private readonly _baseMap: Map<string, string>;

    private constructor(init: string, setTitleFunction: SetTitleFunction) {

        this._init = init;
        this._setTitleFunction = setTitleFunction;

        this._levelBaseMap = new Map<number, string>();
        this._baseMap = new Map<string, string>();
    }

    public get init(): string {
        return this._init;
    }

    public setInit(init: string): this {

        this._init = init;
        return this;
    }

    public setLevelBase(base: string, level: number): this {

        this._levelBaseMap.set(level, base);
        return this;
    }

    public setTitle(...args: string[]): this {

        const title: string = this._buildLevelTitle(args);
        this._setTitleFunction(title);
        return this;
    }

    public setTitleByBase(base: string, ...args: string[]): this {

        const title: string = this._buildBaseTitle(args, base);
        this._setTitleFunction(title);
        return this;
    }

    public replaceTitle(title: string): this {

        this._setTitleFunction(title);
        return this;
    }

    public restoreTitle(): this {

        this._setTitleFunction(this._init);
        return this;
    }

    private _buildBaseTitle(args: string[], base: string): string {

        if (this._baseMap.get(base)) {
            const baseText: string = this._baseMap.get(base) as string;
            return args.reduce((previous: string, current: string) => {
                return previous.replace("{}", current);
            }, baseText);
        }
        return this._buildFallback(args);
    }

    private _buildLevelTitle(args: string[]): string {

        const level: number = args.length;
        if (this._levelBaseMap.get(level)) {
            const baseText: string = this._levelBaseMap.get(level) as string;
            return args.reduce((previous: string, current: string) => {
                return previous.replace("{}", current);
            }, baseText);
        }
        return this._buildFallback(args);
    }

    private _buildFallback(args: string[]): string {

        return args.join(' ');
    }
}
