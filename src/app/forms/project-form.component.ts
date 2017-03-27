import { Component, OnInit } from '@angular/core';
import { Project } from '../project-gallery/project';
import { ProjectGalleryService } from '../project-gallery/project-gallery.service';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
	moduleId: module.id,
	selector: 'project-form',
	templateUrl: './project-form.component.html',
	styleUrls: ['./form.css']
})

export class ProjectForm implements OnInit {
	projectForm = new FormGroup ({
		name: new FormControl('', Validators.required),
		description: new FormControl('', Validators.required),
		featuredImage: new FormControl(''),
		category: new FormControl('', Validators.required),
		tags: new FormControl('')
	});

	constructor(
		private projectGalleryService: ProjectGalleryService,
		private formBuilder: FormBuilder
		){}

	ngOnInit(): void {

	}
	onSubmit(): void {
		this.projectGalleryService.createProject(this.projectForm.value).subscribe(
			res => {
				console.log(res);
				this.projectForm.reset();
			}
		);
	}
}