require("./index.css").toString();
import ToolboxIcon from "../asset/icon.svg";
import WithBorderIcon from "../asset/withBorder.svg";
import WithBackgroundIcon from "../asset/withBackground.svg";
import StretchedIcon from "../asset/stretched.svg";
import ImageIcon from "../asset/image.svg";
import ChangeIcon from "../asset/change.svg";

import AlphaUp from "../asset/alphaUp.svg";
import AlphaDown from "../asset/alphaDown.svg";

const katex=require('katex');

export default class Optionfour {
  static get toolbox() {
    return {
      icon: ToolboxIcon,
      title: "Optionfour",
    };
  }

  static get isReadOnlySupported() {
    return true;
  }

  static get enableLineBreaks() {
    return true;
  }

  constructor({ data, api, config, readOnly }) {
    this.currentIndex = 0;
    this.change = false;
    this.api = api;
    this.config = config;
    this.readOnly = readOnly;
    this.data = {
      option: data.option || " ",
      selected: data.selected || " ",
      a_text: data.a_text || "",
      b_text: data.b_text || "",
      c_text: data.c_text || "",
      d_text: data.d_text || "",
      withBorder: data.withBorder !== undefined ? data.withBorder : false,
      withBackground:
      data.withBackground !== undefined ? data.withBackground : false,
      stretched: data.stretched !== undefined ? data.stretched : false,
      image: data.image !== undefined ? data.image : false,
      math: data.math !== undefined ? data.math : false,
    };
    this.wrapper = undefined;
    this.katex=katex;
    this.options = [
      {
        type: "a",
        placeholder: this.data.a_text || "write option a",
      },
      {
        type: "b",
        placeholder: this.data.b_text || "write option b",
      },
      {
        type: "c",
        placeholder: this.data.c_text || "Write option c",
      },
      {
        type: "d",
        placeholder: this.data.d_text || "Write option d",
      },
    ];
    this.settings = [
      {
        name: "withBorder",
        icon: WithBorderIcon,
      },
      {
        name: "stretched",
        icon: StretchedIcon,
      },
      {
        name: "withBackground",
        icon: WithBackgroundIcon,
      },
      {
        name: "change",
        icon: ChangeIcon,
      },
      {
        name: "alpha-up",
        icon: AlphaUp,
      },
      {
        name: "alpha-down",
        icon: AlphaDown,
      },
    ];
  }

  render() {
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("optionfour");

    if(this.readOnly == true){

      if(this.config.showAnswer == false){
        this.createOption();
      }
      if(this.config.showAnswer ==true){
       this.showAnswer();
       
        // alert.appendChild(comment);
        // this.wrapper.appendChild(alert);

      }

     

    }else{
      this.createWrapper();
    }

    return this.wrapper;
  }

  showAnswer(){
    let form = document.createElement("form");

    let alert=document.createElement('div');
        alert.classList.add('alert');
     let comment=document.createElement('p');
        if(this.data.selected==this.data.option){
          comment.classList.add('alert-success');
          comment.title="Correct";
          comment.innerText="Correct option is \""+this.data.option+"\". \n Your option is \""+this.data.selected+"\".";
        }else{
          comment.classList.add('alert-danger');
          comment.title="Incorrect!";
          comment.innerText="Correct option is \""+this.data.option+"\".";
        }
    
    this.options.forEach((item) => {
      let div=document.createElement('div');
      div.classList.add('checkboxWithcontent');
      
      
     // text.innerHTML='This is demonstration text, can it will be long enough for a line.this is amazing it going longer and longer..';
      let input = document.createElement("input");

      input.setAttribute("type", "checkbox");
      input.setAttribute("name", item.type);
      //input.checked = true;
      input.id = item.type;
      input.disabled=true;
     
      let string;

      switch(item.type){
        case 'a':
          string=this.data.a_text;
          break;
        case 'b':
          string=this.data.b_text;
          break;
        case 'c':
          string=this.data.c_text;
          break;
        case 'd':
          string=this.data.d_text;
          break;
        default:
          string='Example text';
          break;
      }

      let text;
      if(string.trim().includes("https://")){
         // make image part
         text=document.createElement('img');
         text.src=string.trim();
      } else{
        text=document.createElement('p');
        if(string.trim().includes(" ")){
          // make string part
          text.innerHTML=string;
        }else{
          //make math part
          this.katex.render(string,text,{
            throwOnError:false
        });
        }
      }

      

      if(this.data.selected==item.type){
          input.checked=true;
      }
      div.appendChild(input);
      div.appendChild(text);
      form.appendChild(div);
      

     
     
    });
    alert.appendChild(comment);
    form.appendChild(alert);
    this.wrapper.classList.remove('optionfour');
    this.wrapper.classList.add('checkbox');
    this.wrapper.appendChild(form);

  }

  createOption() {
    let form = document.createElement("form");
    
    this.options.forEach((item) => {
      let div=document.createElement('div');
      div.classList.add('checkboxWithcontent');
      
      
     // text.innerHTML='This is demonstration text, can it will be long enough for a line.this is amazing it going longer and longer..';
      let input = document.createElement("input");

      input.setAttribute("type", "checkbox");
      input.setAttribute("name", item.type);
      //input.checked = true;
      input.id = item.type;
     
      let string;

      switch(item.type){
        case 'a':
          string=this.data.a_text;
          break;
        case 'b':
          string=this.data.b_text;
          break;
        case 'c':
          string=this.data.c_text;
          break;
        case 'd':
          string=this.data.d_text;
          break;
        default:
          string='Example text';
          break;
      }

      let text;
      if(string.trim().includes("https://")){
         // make image part
         text=document.createElement('img');
         text.src=string.trim();
      } else{
        text=document.createElement('p');
        if(string.trim().includes(" ")){
          // make string part
          text.innerHTML=string;
        }else{
          //make math part
          this.katex.render(string,text,{
            throwOnError:false
        });
        }
      }

      

      if(this.data.selected==item.type){
          input.checked=true;
      }
      div.appendChild(input);
      div.appendChild(text);
      form.appendChild(div);
      

      input.addEventListener("click", () => {
        if(input.checked==true){
          this.data.selected = item.type;
          console.log(this.data.selected);
          this.wrapper.innerHTML='';
          this.createOption();
        }else{
          this.data.selected = '';
        console.log(this.data.selected);
        this.wrapper.innerHTML='';
        this.createOption();
        }
        
      });

     
    });
    this.wrapper.classList.remove('optionfour');
    this.wrapper.classList.add('checkbox');
    this.wrapper.appendChild(form);
  }

  createWrapper() {
    this.options.map((item) => {
      let input = document.createElement("input");
      input.id = item.type;
      let id = input.id;
      input.placeholder = item.placeholder;

      input.addEventListener("change", () => {
        console.log(input.value);
        if (id == "a") {
          this.data.a_text = input.value;
        }
        if (id == "b") {
          this.data.b_text = input.value;
        }

        if (id == "c") {
          this.data.c_text = input.value;
        }
        if (id == "d") {
          this.data.d_text = input.value;
        }
      });
      this.wrapper.appendChild(input);
    });
  }

  renderSettings() {
    const wrapper = document.createElement("div");

    this.settings.forEach((tune) => {
      let button = document.createElement("div");

      button.classList.add(this.api.styles.settingsButton);
      button.classList.toggle(
        this.api.styles.settingsButtonActive,
        this.data[tune.name]
      );
      button.innerHTML = tune.icon;
      wrapper.appendChild(button);

      button.addEventListener("click", () => {
        this._toggleTune(tune.name);

        if (tune.name == "change") {
          console.log(this.data);
          this.change = !this.change;
          this.wrapper.innerHTML='';

          if (this.change == true) {
            this.createOption();
          } else {
            this.createWrapper();
          }

          return this.wrapper;
        }
        if (tune.name === "alpha-up") {
          this._nextAlphabet();
        }
        if (tune.name === "alpha-down") {
          this._prevAlphabet();
        }
      });
    });

    return wrapper;
  }
  save(){
    return {
      ...this.data
    }
  }
  _toggleTune(tune) {
    this.data[tune] = !this.data[tune];
    this._acceptTuneView();
  }
  _acceptTuneView() {
    this.settings.forEach((tune) => {
      this.wrapper.classList.toggle(tune.name, !!this.data[tune.name]);

      if (tune.name === "stretched") {
        this.api.blocks.stretchBlock(
          this.api.blocks.getCurrentBlockIndex(),
          !!this.data.stretched
        );
      }
    });
  }

  _nextAlphabet() {
    this.currentIndex = this.currentIndex + 1;
    let al = String.fromCharCode(64 + this.currentIndex);
    this.data.option = al;
    this.wrapper.innerHTML = "";
    this.wrapper.innerHTML = al;
    return this.wrapper;
  }

  _prevAlphabet() {
    this.currentIndex = this.currentIndex - 1;
    let al = String.fromCharCode(64 + this.currentIndex);
    this.data.option = al;
    this.wrapper.innerHTML = "";
    this.wrapper.innerHTML = al;
    return this.wrapper;
  }
}
