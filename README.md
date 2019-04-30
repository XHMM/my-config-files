## Intro
It's my own linter tools config setup, still 'in develop'

## Hi
My experience: although I used eslint and prettier many times but I did not remember to create a sharable config, so I always need to setup them every time, it's really cumbersome and even made me not want to use eslint and prettier. One day I wake up and made this repo and publish them as npm module, now I can easily setup them, so happy. (PS: now this repo include all my config not only eslint and prettier)

And I will update them according to my dev road. 

**This repo is just for personal use, if someone want to use it, you'd better create your own rules (but I think this repo can help you learn how to create a sharable eslint/prettier config)** 

## Usage 
1. `yarn add --dev eslint prettier typescript eslint-config-xhmm prettier-config-xhmm`
2. create `.eslintrc`：
    ```json
    {
      "extends": ["xhmm/ts-node"]
    }
    ```
    or
    ```json
    {
      "extends": ["xhmm/ts-browser"]
    }
    ```
3. create `prettier.config.js`：
    ```js
    module.exports = {
      ...require('prettier-config-xhmm')
    };
    ```
    
4. edit `tsconfig.json`：
    ```json
    {
      "compilerOptions": {
        "noUnusedLocals": true,
        "noUnusedParameters": true
      }
    }
    ```

6. you need to have a `tsconfig.json` file for some rules to work, by default, it will search your root dir relative to node_modules, if you want to change it, change your `.eslintrc` as below :
    ```json
        {
          "extends": ["xhmm/ts-node"],
          "parserOptions": {
            "project": "./tsconfig.json",
            "tsconfigRootDir": "../../"
          }
        }
    ```
    
5. if using `xhmm/ts-browser`, go on create `.browserslistrc` and configure your target browser
11. create a `.editconfig` file if possible

7. (optional) stylelint setup, it's pretty simple (I am not very focus on this linter, so rules and related plugins not involved much more)：
8. `yarn add --dev stylelint stylelint-config-standard`
9. create `.stylelintrc`：
    ```json
    {
      "extends": "stylelint-config-standard"
    }
    ```

10. create `.eslintignore` and `.stylelintignore` to ignore not related files. (PS: **ignorefile should must be placed in root dir**) 

That's all, after setup, every prettier format problem will become an eslint error and some other rules you can get from source config files, happy coding !


## Future Plan

To write better ts code, I will add `ban-ts-ignore` and enable `strict` in `tsconfig.json` in the future.
