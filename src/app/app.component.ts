import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codetohtml';

  sourceCode = "Enter (or paste) your source code here";
  htmlMarkUp = "Your mark-up will appear here";

  public sourceChange($event): void {
    this.htmlMarkUp = "";
  }

  private replaceAllOccurrancesOf(character: string, withString: string) {
    var c: boolean = true;
    while (c) {
      if (this.htmlMarkUp.indexOf(character) > -1) {
        this.htmlMarkUp = this.htmlMarkUp.replace(character, withString);
      } else {
        c = false;
      }
    }    
  }

  public convert(): void {
    this.htmlMarkUp = this.sourceCode;
    this.replaceAllOccurrancesOf("{", "&lbrace;");
    this.replaceAllOccurrancesOf("}", "&rbrace;");
    this.replaceAllOccurrancesOf("<", "&lt;");
    this.replaceAllOccurrancesOf(">", "&gt;");
    this.replaceAllOccurrancesOf("&", "	&amp;");

    //var x = /{/;
    //this.htmlMarkUp = this.htmlMarkUp.replace("{", );
  }
}
