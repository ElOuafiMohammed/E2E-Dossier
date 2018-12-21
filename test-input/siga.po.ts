import { ExpectedConditions, browser, element, by, Key, $$, $,} from 'protractor';


export class AppPage {
  navigateTo(adresse: string) {
    browser.get(adresse);
  }

  getTitre() {
    return element(by.css('ng-component h1'));
  }
  getByAttribut(attribut: string,afficher=false) {
    $$(attribut).getText().then(function (text) {if(afficher==true){console.log(text)} });
    return $$(attribut);
  }
  getById(id: string,afficher=false) {
    $$(id).getText().then(function (text) { if(afficher==true){console.log(text)} });
    return $$(id);
  }
  getWindow()
  {
      return  browser.getAllWindowHandles();
  }
  changeWindow(choix: number)
  {
    browser.getAllWindowHandles().then(function(handles){
      browser.switchTo().window(handles[choix]);
    });
  }
  getDate(jourDePlus: number) {
    let jour="";
    let mois="";
    if (((new Date()).getDate()+jourDePlus)<=9){
      jour ="0"+((new Date()).getDate()+jourDePlus);
    }
    else{
      jour =""+((new Date()).getDate()+jourDePlus);
    }
    if (((new Date()).getMonth()+1)<=9){
      mois ="0"+((new Date()).getMonth()+1);
    }
    else{
      mois =""+((new Date()).getMonth()+1);
    }
    let jourMoisAnnee=(jour+"/"+mois+"/"+new Date().getFullYear());
    return jourMoisAnnee;
  }
  getCss(parameter: string) {
    var cssElement = browser.findElement(by.css(parameter));
    return cssElement;
  }
  getClasse(classe: string,afficher=false) {
    element.all(by.className(classe)).getText().then(function (text) { if(afficher==true){console.log(text)} });
    return element.all(by.className(classe));
  }
  getAllCss(cssName:string) {
    return element.all(by.css(cssName));
  }
  getOneElementByClasse(choix: number,classe: string,afficher=false) {
    element.all(by.className(classe)).get(choix).getText().then(function (text) { if(afficher==true){console.log(text)} });
    return element.all(by.className(classe)).get(choix);
  }
  moveMouseToClasse(choix: number, classe: string) {
    browser.actions().mouseMove($$(classe).get(choix)).perform();
  }
  getWordInString(position: number, phrase: string, separateur : string) {
    let mot = "";
    let motPosition = 0;
    let trouverSeparateur=false;
    for (var i = 0; i < phrase[0].length; i++) {
      if (phrase[0].charAt(i) === separateur[0]) {
        trouverSeparateur=true;
        for(var k = i; k < i + separateur.length; k++)
        {
          if(phrase[0].charAt(k) === separateur[k-i])
          {
            continue;
          }
          else{
            trouverSeparateur=false;
            mot = mot + phrase[0].charAt(i);
            break;
          }
        }
        if (position == motPosition) {
          return mot;
        }
        if(trouverSeparateur==true)
        {
          motPosition = motPosition + 1
          mot = "";
        }
      }
      else {
        mot = mot + phrase[0].charAt(i);
      }
    }
    return mot
  }
  getWordInList(position: number, phrase: string, separateur: string) {
    let mot = "";
    let motPosition = 0;
    let trouverSeparateur=false;
    for (var i = 0; i < phrase.length; i++) {
      if (phrase.charAt(i) === separateur[0]) {
        trouverSeparateur=true;
        for(var k = i; k < i + separateur.length; k++)
        {
          if(phrase.charAt(k) === separateur[k-i])
          {
            continue;
          }
          else{
            trouverSeparateur=false;
            mot = mot + phrase.charAt(i);
            break;
          }
        }
        if (position == motPosition) {
          return mot;
        }
        if(trouverSeparateur==true)
        {
          motPosition = motPosition + 1
          mot = "";
        }
      }
      else {
        mot = mot + phrase.charAt(i);
      }
    }
    return mot
  }
  getFromElementToAnother(ancienneListe: string,index1: number, index2: number)
  {
    let mot = "";
    let liste=[];
    let nouvelleListe=[];
    for (var i = index1; i<=index2; i++)
    {
      nouvelleListe.push(ancienneListe[i]);
    }
    return nouvelleListe;
  }
  moveMouseToClasseAndClick(choix: number, classe: string) {
    browser.actions().mouseMove(element.all(by.className(classe)).get(choix)).click().perform();
  }
  clickAttribut(choix: number, attribut: string) {
    browser.actions().mouseMove($$(attribut).get(choix)).perform().then(function () { ($$(attribut).get(choix)).click() });
  }
  sendTab() {
    browser.actions().sendKeys(Key.TAB).perform();
  }
  sendEnter() {
    browser.actions().sendKeys(Key.ENTER).perform();
  }
  sendMots(message: string) {
    browser.actions().sendKeys(message).perform();
  }
  switchTab() {
    browser.getAllWindowHandles().then(function (handles) {
      browser.driver.switchTo().window(handles[1]);
      browser.driver.close();
      browser.driver.switchTo().window(handles[0]);
  });
  }
  sendFlecheDroite() {
    browser.actions().sendKeys(Key.ARROW_RIGHT).perform();
  }
  sendFlecheHaut() {
    browser.actions().sendKeys(Key.ARROW_UP).perform();
  }
  sendFlecheHautN(n:number) {
    for(var i=0;i<n;i++){
    browser.actions().sendKeys(Key.ARROW_UP).perform();
  }
  }
  sendFlecheBas() {
    browser.actions().sendKeys(Key.ARROW_DOWN).perform();
  }
  sendFlecheBasN(n:number) {
    for(var i=0;i<n;i++){
    browser.actions().sendKeys(Key.ARROW_DOWN).perform();
  }
  }
  clickClasse(choix: number, classe: string) {
    browser.wait(ExpectedConditions.visibilityOf(element.all(by.className(classe)).get(choix)), 10000);
    element.all(by.className(classe)).get(choix).click();
  }
  clickCss(choix: number, cssName: string) {
    browser.wait(ExpectedConditions.visibilityOf(element.all(by.css(cssName)).get(choix)), 10000);
    element.all(by.css(cssName)).get(choix).click();
  }
  
  clickId(id: string) {
    browser.wait(ExpectedConditions.visibilityOf(element(by.id(id))), 10000);
    element(by.id(id)).click();
  }
  findIndex (item: string, liste: string)
  {
  let i; 
  for (i=0; i<=liste.length;i++)
      {
        if (liste[i]===item)
        {
          break;
        }
      }
     return i;
  }

  enterChamps(choix: number, message: string, classe: string) {
    //browser.actions().mouseMove(element.all(by.className(classe)).get(choix)).perform();
    var ComplementIntitule = element.all(by.className(classe)).get(choix);
    ComplementIntitule.click();
    browser.actions().sendKeys(message).perform();
  }

  enterChampsById(id: string, message: string) {
    browser.wait(ExpectedConditions.visibilityOf(element(by.id(id))), 10000);
    element(by.id(id)).click();
    browser.actions().sendKeys(message).perform();
  }
    enterChampsByCss(choix: number, message: string, cssClasse: string) {
    browser.wait(ExpectedConditions.visibilityOf(element(by.css(cssClasse))), 10000);
    element(by.css(cssClasse)).click();
    browser.actions().sendKeys(message).perform();
	}
	enterChampsByBinding(choix: number, message: string, bindingClasse: string) {
    browser.wait(ExpectedConditions.visibilityOf(element(by.binding(bindingClasse))), 10000);
    element(by.binding(bindingClasse)).click();
    browser.actions().sendKeys(message).perform();
  }
}
