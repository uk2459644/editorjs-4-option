# Optionfour
Provide block tool for MCQ's (multiple choise questions). You can write question as usual using EditorJS, for options you can use this plugin. It have four inputs for , 4 options a,b,c,d respectavily. Paste any kind of data inclusive image url, simple text , or mathlive (latex text) text for mathmatical expressions.

## Installation
Install via npm 
```bash
npm install editorjs-4-option
```
or via yarn
```bash
yarn add editorjs-4-option
```
## Usage 
Include module at your package
```javascript
import Optionfour from 'editorjs-4-option'
```
Add new Tool to the tools property of the EditorJS's initial config.
```javascript
var editorjs=new EditorJS({
       ...
       tools:{
       ...
       optionfour:{
       class : Optionfour,
       config:{
       showAnswer:false,
       }
       },
       ...
       }
       ...
       });
```
customize config according to use. If you want to show correct answer to viewers, set showAnswer to true
```javascript
var editorjs=new EditorJS({
       ...
       tools:{
       ...
       optionfour:{
       class : Optionfour,
       config:{
       showAnswer:true,
       }
       },
       ...
       }
       ...
       });
```
## Output data
```javascript
{
      "id": "ofrFftKa-t",
      "data": {
        "stretched": false,
        "d_text": "this is option d",
        "math": false,
        "c_text": "this is option c",
        "alpha-up": true,
        "b_text": "this is option b",
        "a_text": "https://firebasestorage.googleapis.com/v0/b/open-academy-63ad7.appspot.com/o/images%2Fphysics-photos%2FiiYpl3X6WMWeoMuAMxomclNPv8h1%2Fchemistry.png?alt=media&token=7e79a303-8948-4f3a-836e-dabc03a8e535",
        "change": true,
        "withBorder": false,
        "withBackground": false,
        "option": "a",
        "image": false,
        "selected": " "
      },
      "type": "optionfour"
    }
    ```
    
