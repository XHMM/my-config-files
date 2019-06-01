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
    or
    ```json
    {
      "extends": ["xhmm/ts-react"]
    }
    ```
3. create `prettier.config.js`：
    ```js
    module.exports = {
      ...require('prettier-config-xhmm')
    };
    ```
    
4. edit `tsconfig.json`(below means let tsc deal but not eslint because tsc is more efficient)：
    ```json
    {
      "compilerOptions": {
        "noUnusedLocals": true,
        "noUnusedParameters": true
      }
    }
    ```

5. you need to have a `tsconfig.json` file for some rules to work, by default, it will search `tsconfig.json` in the same level with node_modules, if you want to change it, change your `.eslintrc` as below :
    ```json
        {
          "extends": ["xhmm/ts-xx"],
          "parserOptions": {
            "project": "./src/tsconfig.json"
          }
        }
    ```
    
6. create a `.editconfig` file :
       ```text
       root = true
       [*]
       indent_style = space
       indent_size = 2
       end_of_line = lf
       charset = utf-8
       trim_trailing_whitespace = false
       insert_final_newline = true
       ```

7. (optional) if using `xhmm/ts-browser` or `xhmm/ts-react``, go on create `.browserslistrc` and configure your target browser(browserslist not work very well... so you can skip this step)

8. (optional) stylelint setup: it's pretty simple (I am not very focus on this linter(because webstorm support is bad?))：
    - `yarn add --dev stylelint stylelint-config-standard`
    - create `.stylelintrc`：
      ```json
      {
        "extends": "stylelint-config-standard"
      }
      ```

10. (optional) create `.eslintignore` and `.stylelintignore` to ignore not related files. (remind: ignorefiles should be placed in root dir) 

That's all, after setup, every prettier format problem will become an eslint error, you can checkout other rules from source config files, happy confident coding!
