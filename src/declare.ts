/**
 * @author WMXPY
 * @namespace Title
 * @description Declare
 */

export type SetTitleFunction = (title: string) => any;

export const getDefaultSetTitleFunction = (): SetTitleFunction => {

    return (title: string) => {
        document.title = title;
    };
};

export const getDefaultTitle = (): string => {

    return document.title;
};
