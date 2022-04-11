import { Injectable } from '@angular/core';
import { Header } from '../models/header.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
    headers : Header[] = [
        {
            id:1,
            title:'Archibald',
            description:'Mon meilleur ami depuis tout petit !',
            imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdDate: new Date(),
            snaps: 0
          },
          {
            id:2,
            title:'Archibald 2',
            imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdDate: new Date(),
            snaps: 0
          }
    ]     
    
    getAllHeader(): Header[] {
        return this.headers;
    }

    headerById(idHeader: number): void {
        const header = this.headers.find(header => header.id === idHeader);
        if (header) {
            header.snaps++;
        } else {
            throw new Error('FaceSnap not found!');
        }
    }

    unsnapFaceSnapById(id: number): void {
        const faceSnap = this.headers.find(header => header.id === id);
        if (faceSnap) {
            faceSnap.snaps--;
        } else {
            throw new Error('FaceSnap not found!');
        }
    }

    getFaceSnapById(faceSnapId: number): Header {
        const faceSnap = this.headers.find(header => header.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
      }
}