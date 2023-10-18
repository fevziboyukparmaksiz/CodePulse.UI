import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddBlogPost } from '../models/add-blog-post.model';
import { environment } from 'src/environments/environment.development';
import { BlogPost } from '../models/blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {

  constructor(private http: HttpClient) { }

  createBlogPost(model: AddBlogPost): Observable<BlogPost> {
    return this.http.post<BlogPost>(`${environment.apiBaseUrl}/api/blogposts`, model)
  }
}
