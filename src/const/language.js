import React from 'react';

export const LANGUAGES = [
    'javaScript',
    'C++',
    'Ruby',
    'Java',
    'PHP',
    'Go'
]

export const getLanguages = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(LANGUAGES);
         }, 1000)
    })
}