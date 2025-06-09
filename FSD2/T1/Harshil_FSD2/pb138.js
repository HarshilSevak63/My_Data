class time{
    constructor(h,m,s){
        this.h=h;
        this.m=m;
        this.s=s;
    }
    sum(t){
        this.h=this.h+t.h;
        this.m=this.m+t.m;
        this.s=this.s+t.s;
        if(this.s>60){
            this.m=this.m+Math.floor(this.s/60);
            this.s=this.s%60;
        }
        if(this.m>60){
            this.h=this.h+Math.floor(this.m/60);
            this.m=this.m%60;
        }
        console.log(this.h+':'+(this.m)+':'+this.s);
    }
}
t1=new time(2,15,50);
t2=new time(5,40,50);
t1.sum(t2);