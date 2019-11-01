/**
 * @author WMXPY
 * @namespace Title
 * @description Placeholder
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { Title } from "../../src";

describe('Given {Title} Class', (): void => {

    const chance: Chance.Chance = new Chance('title-title');

    it('Should be able to set title', (): void => {

        let currentTitle: string = chance.string();

        const title: Title = Title.create(currentTitle, (next: string) => currentTitle = next);

        const newTitle: string = chance.string();
        title.setTitle(newTitle);

        expect(currentTitle).to.be.equal(newTitle);
    });

    it('Should be able to set multiple title', (): void => {

        let currentTitle: string = chance.string();

        const title: Title = Title.create(currentTitle, (next: string) => currentTitle = next);

        const newTitle: string = chance.string();
        title.setTitle(newTitle, newTitle);

        expect(currentTitle).to.be.equal(`${newTitle} ${newTitle}`);
    });

    it('Should be able to restore title', (): void => {

        const init: string = chance.string();
        let currentTitle: string = init;

        const title: Title = Title.create(currentTitle, (next: string) => currentTitle = next);

        const newTitle: string = chance.string();
        title.setTitle(newTitle);

        expect(currentTitle).to.be.equal(newTitle);

        title.restoreTitle();

        expect(currentTitle).to.be.equal(init);
    });

    it('Should be able to render base title', (): void => {

        let currentTitle: string = chance.string();

        const title: Title = Title.create(currentTitle, (next: string) => currentTitle = next);
        title.setLevelBase('{} - Title', 1);

        const newTitle: string = chance.string();
        title.setTitle(newTitle);

        expect(currentTitle).to.be.equal(`${newTitle} - Title`);
    });

    it('Should be able to render multiple base title', (): void => {

        let currentTitle: string = chance.string();

        const title: Title = Title.create(currentTitle, (next: string) => currentTitle = next);
        title.setLevelBase('{} - Title', 1);
        title.setLevelBase('{} | {} - Title', 2);

        const newTitle: string = chance.string();
        title.setTitle(newTitle);

        expect(currentTitle).to.be.equal(`${newTitle} - Title`);

        title.setTitle(newTitle, newTitle);

        expect(currentTitle).to.be.equal(`${newTitle} | ${newTitle} - Title`);
    });
});
