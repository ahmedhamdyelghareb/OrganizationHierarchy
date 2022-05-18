import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'org-tree',
  templateUrl: './org-tree.component.html',
  styleUrls: ['./org-tree.component.css']
})
export class OrgTreeComponent implements OnInit {

  baseData:any=[
    {
    "name": "ahmed",
    "code": "0001",
    "imagePath": "https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png"
    },{
    "name": "mohamed",
    "code": "0001.0003.0004.0002",
    "imagePath": "https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png"
    },{
    "name": "ali",
    "code": "0001.0003",
    "imagePath": "https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png"
    },{
    "name": "ibrahim",
    "code": "0001.0003.0004",
    "imagePath": "https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png"
    },{
    "name": "mahmoud",
    "code": "0001.0010.0005",
    "imagePath": "https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png"
    },{
    "name": "samy",
    "code": "0001.0010.0006",
    "imagePath": "https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png"
    },{
    "name": "hany",
    "code": "0001.0003.0004.0007",
    "imagePath": "https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png"
    },{
    "name": "samir",
    "code": "0001.0010.0005.0008",
    "imagePath": "https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png"
    },{
    "name": "khalid",
    "code": "0001.0010.0006.0009",
    "imagePath": "https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png"
    },{
    "name": "abdullah",
    "code": "0001.0010",
    "imagePath": "https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png"
    }
    ]
data:any
  constructor() {
   }

  ngOnInit(): void {
    this.convertListToTree(this.baseData)
  }



  convertListToTree(list:any){
    let mapped = list.map((element:any) => ({
      ...element,
      parentId: element.code.split('.').slice(0, -1).join(""),
      code:element.code.split('.').join(""),
      label:element.name,
      expanded: true,
    }));

    this.data= this.nest(mapped)
  }

  nest(items:any, code = "", link = 'parentId'){
   let tree= items
    .filter((item:any) => item[link] === code)
    .map((item:any) => ({ ...item, children: this.nest(items, item.code) }))

    return tree
  }


  returnCode(code:any){
 return code.match(/.{1,4}/g).join(".")
  }

}
