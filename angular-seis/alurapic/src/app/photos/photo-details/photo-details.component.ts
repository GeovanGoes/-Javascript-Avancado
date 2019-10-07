import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PhotoService } from "../photo/photo.service";
import { Photo } from "../photo/photo";



@Component({
    templateUrl: 'photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

    photo: Photo;

    constructor(private route: ActivatedRoute, private photoService: PhotoService){

    }

    ngOnInit(){
        const id = this.route.snapshot.params.photoId;
        this.photoService.findById(id).subscribe(response => {
            this.photo = response;
        }, err => console.log(err));
    }

}