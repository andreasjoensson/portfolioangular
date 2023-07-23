import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  categories = {
    frontend: {
      name: 'Frontend development',
      icon: 'flip_to_front',
      skills: [
        {
          name: 'Angular',
          image: 'assets/skills/angular.png',
        },
        {
          name: 'Bootstrap',
          image: 'assets/skills/bootstrap.png',
        },
      ],
    },
    database: {
      name: 'Database',
      icon: 'storage',
      skills: [
        {
          name: 'MongoDB',
          image: 'assets/skills/mongodb.png',
        },
        {
          name: 'DynamoDB',
          image: 'assets/skills/dynamodb.png',
        },
        {
          name: 'MySQL',
          image: 'assets/skills/mysql.png',
        },
      ],
    },
    backend: {
      name: 'Backend development',
      icon: 'code',
      skills: [
        {
          name: 'NodeJS',
          image: 'assets/skills/nodejs.png',
        },
        {
          name: 'Python',
          image: 'assets/skills/python.png',
        },
        {
          name: 'Java',
          image: 'assets/skills/java.png',
        },
        {
          name: 'Bash',
          image: 'assets/skills/bash.png',
        },
        {
          name: 'Flask',
          image: 'assets/skills/flask.png',
        },
        {
          name: 'Express',
          image: 'assets/skills/express.png',
        },
      ],
    },
    infrastructure: {
      name: 'Infrastructure',
      icon: 'cloud',
      skills: [
        {
          name: 'Terraform',
          image: 'assets/skills/terraform.png',
        },
        {
          name: 'AWS SAM',
          image: 'assets/skills/sam.png',
        },
        {
          name: 'Cloudformation',
          image: 'assets/skills/cloudformation.png',
        },
        {
          name: 'Open API',
          image: 'assets/skills/openapi.png',
        },
        {
          name: 'Docker',
          image: 'assets/skills/docker.png',
        },
      ],
    },
  };

  ngOnInit(): void {}
}
