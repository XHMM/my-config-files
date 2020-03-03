## 😋 Introduction

It's my own linter tools config setup, still 'in developing'. 

## 😄 Say Hi

My experience: although I used eslint and prettier many times but I did not remember to create a sharable config, so I always need to setup them every time, it's really cumbersome and even made me not want to use eslint and prettier. 

One day I wake up and made this repo and publish them as npm module, now I can easily setup them, so happy. (PS: this repo will include all my config files not only eslint and prettier). I update this repo according to my dev road. 

**Reminid:** This repo is just for personal use, if someone want to use it (happy), you'd better create your own rules (but I think this repo can help you learn how to create a sharable eslint/prettier config)

## 😀 Usage 

1. `npm i -D eslint prettier typescript eslint-config-xhmm prettier-config-xhmm`

2. create `.eslintrc` and then：

   when working with `nodejs`：

   ```json
   {
     "extends": ["xhmm/ts-node"]
   }
   ```

   when working with vanilla browser env development：

   ```json
   {
     "extends": ["xhmm/ts-browser"]
   }
   ```

   when working with [typescript and react](<https://github.com/XHMM/typescript-react-starter>)：

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

4. modify `tsconfig.json`：

   ```json
   {
     "compilerOptions": {
       "noUnusedLocals": true,
       "noUnusedParameters": true
     }
   }
   ```

5. because some eslint rules need `tsconfig.json` and by default the file in the same level with `node_modules` are used, if you want to change the default path, edit your `.eslintrc` like below :

   ```json
       {
         "extends": ["xhmm/ts-[env]"],
         "parserOptions": {
           "project": "./src/tsconfig.json"
         }
       }
   ```

6. create `.editconfig` file :

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

7. if using `xhmm/ts-browser` or `xhmm/ts-react`, go on creating `.browserslistrc` and configure target browsers  ([examples](https://github.com/browserslist/browserslist#full-list))

8. (optional) `stylelint` setup : I am not very focus on this linter, but it's pretty simple：

   - `npm i -D stylelint stylelint-config-standard`

   - create `.stylelintrc`：

     ```json
     {
       "extends": "stylelint-config-standard"
     }
     ```

9. (optional) create `.eslintignore` and `.stylelintignore` to ignore unrelated files. (remind: place this files in the root folder) 

------


😜 That's all.
