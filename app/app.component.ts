import {Component} from 'angular2/core';


@Component({
  selector: 'reddit-article',
  host: {
    class: 'row'
  },
  template: `
    <div class="four wide column center align votes">
      <div class="ui statistic">
        <div class="value">
          {{ votes }}
        </div>
        <div class="label">
          Pika
        </div>
      </div>
    </div>
    <div class="twelve wide column">
      <a class="ui large header" href="{{ link }}">
        {{ title }}
      </a>
      <ul class="ui big horizontal list voters">
        <li class="item">
          <a href (click)="voteUp()">
            <i class="arrow up icon"></i>
            upvote
          </a>
        </li>
        <li class="item">
          <a href (click)="voteDown()">
            <i class="arrow down icon"></i>
            downvote
          </a>
        </li>
      </ul>
    </div>
  `
})

export class ArticleComponent {
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.title = 'Angular 2';
    this.link = 'http://angular.io';
    this.votes = 10;
  }

  voteUp() {
    this.votes += 1;
  }

  voteDown() {
    this.votes -= 1;
  }

}

@Component({
  selector: 'reddit',
  directives: [ArticleComponent],
  template: `
    <form class="ui large form segment">
      <h3 class="ui header">Add a Link</h3>

      <div class="field">
        <label for="title">Titulli: </label>
        <input name="title" #newtitle>
      </div>
      <div class="field">
        <label for="link">Linku: </label>
        <input name="link" #newlink>
      </div>

      <button (click)="addArticle(newtitle, newlink)"
              class="ui positive right floated button">
        Ngarko linkun
      </button>
    </form>

    <div class="ui grid posts">
      <reddit-article>
      </reddit-article>
    </div>

  `
})

export class AppComponent {
  constructor() {

  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
  }

}
