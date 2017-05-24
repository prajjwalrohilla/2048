
var arr=[['','','',''],['','','',''],['','','',''],['','','','']],i,j,score=0;

var count=14,m,u,t=0,c=[['','','',''],['','','',''],['','','',''],['','','','']];

var highsc=" ",hg= new Date();

window.onload=function go(){      
	gee();      
};

function gee(){
var k,d="  ",e;
arr=[['','','',''],['','','',''],['','','',''],['','','','']];
c=[['','','',''],['','','',''],['','','',''],['','','','']];
var tell,ch;
ch=1000*24*365*60*60;
tell=Math.round(hg.getTime()/ ch);
	if(score!=0)
	highsc+="</br>"+score+" ----------->  "+"Time"+"   " +hg.getHours()+":"+hg.getMinutes()+":"+hg.getSeconds()+"</br>";

score=0;
r=" ";
k=Math.floor((Math.random() * 4) + 0);
e=Math.floor((Math.random() * 4) + 0);
if(e==k)
{
	if(k>=0&&k<3)
		{k++;}
	else
		k--;
}
arr[k][e]=2;

arr[e][k]=2;
i=0;
while(i<4)
{	d=d+"<tr class=row>";
 j=0;
		while(j<4)

		{d+="<td >"+ arr[i][j]+"</td>";
			c[i][j]=arr[i][j];
		j++;
	}
	d+="</tr>";
		


	i++;
}
document.getElementById("11").innerHTML=d;
document.getElementById("high").innerHTML=highsc;
};


//to find key
$(document).ready(function()
{
	

$(document).keydown(function(event){
    
    switch(event.keyCode)
	{

		case 38:
		up();
		break;

		case 40:
		dow();
		break;

		case 37:
		le();
		break;

		case 39:
		ri();
		break;

	}

	});

 });

//for up move
function up()
{

u=0;
	//function to shift empty spaces
while(u<3)
{
		i=0;

	while(i<3)
	{	
		j=0;
 		
			while(j<4)
			{
				if(arr[i][j]==0)
					{
						m=i;
							while(m<3)
							{

								arr[m][j]=arr[m+1][j];
								m++;
							if(m==3)
								{arr[m][j]='';}
						}

			}


		j++;
	}

	i++;

}
u++;
}

//function to add same elements
i=0;

while(i<3)
	{	
		j=0;
 		
			while(j<4)
			{
				if((arr[i][j]==arr[i+1][j])&&arr[i][j]!='')
					{
						arr[i][j]=arr[i][j]*2;
						score+=arr[i][j];

						m=i+1;
							while(m<3)
							{
								arr[m][j]=arr[m+1][j];
								m++;
							
						}
						if(m==3)
								{arr[m][j]='';}

			}
		j++;
	}

	i++;
}
disp();

}

//for down move
function dow()
{

u=0;
	//function to shift empty spaces
while(u<3)
{
	i=3;

	while(i>0)
	{	
		j=0;
 		
			while(j<4)
			{
				if(arr[i][j]==0)
					{
						m=i;
							while(m>0)
							{

								arr[m][j]=arr[m-1][j];
								m--;
							if(m==0)
								{arr[m][j]='';}
						}
			}


		j++;
	}

	i--;

}
u++;
}

//function to add same elements
i=3;

while(i>0)
	{	
		j=0;
 		
			while(j<4)
			{
				if((arr[i][j]==arr[i-1][j])&&arr[i][j]!='')
					{
						arr[i][j]=arr[i][j]*2;
						score+=arr[i][j];

						m=i-1;
							while(m>0)
							{

								arr[m][j]=arr[m-1][j];
								m--;
							
						}
						if(m==0)
								{arr[m][j]='';}
				}
		j++;
	}

	i--;

}

disp();
}

//for left move
function le()
{

u=0;
	
//function to shift empty spaces
while(u<3)
{
		j=0;

	while(j<3)
	{	
		i=0;
 		
			while(i<4)
			{
				if(arr[i][j]==0)
					{
						m=j;
							while(m<3)
							{

								arr[i][m]=arr[i][m+1];
								m++;
							if(m==3)
								{arr[i][m]='';}
						
							}

					}


				i++;
			}

		j++;

	}
		
		u++;
	}

//function to add same elements

		j=0;

	while(j<3)
	{	
		i=0;
 		
			while(i<4)
			{
				if((arr[i][j]==arr[i][j+1])&&arr[i][j]!='')
					{
						arr[i][j]=arr[i][j]*2;
						score+=arr[i][j];

						m=j+1;
							while(m<3)
							{

								arr[i][m]=arr[i][m+1];
								m++;
							
						}
						if(m==3)
								{arr[i][m]='';}

			}
		i++;
	}

	j++;

}

disp();

}

// for right move
function ri()
{

u=0;
	
//function to shift empty spaces
while(u<2)
{
		j=3;

	while(j>0)
	{	
		i=0;
 		
			while(i<4)
			{
				if(arr[i][j]==0)
					{
						m=j;
							while(m>0)
							{

								arr[i][m]=arr[i][m-1];
								m--;
								if(m==0)
								{arr[i][m]='';}
							
						}
					}


		i++;
	}

	j--;

}
u++;
}

//function to add same elements

		j=3;

	while(j>0)
	{	
		i=0;
 		
			while(i<4)
			{
				if((arr[i][j]==arr[i][j-1])&&arr[i][j]!='')
					{
						arr[i][j]=arr[i][j]*2;
						score+=arr[i][j];

						m=j-1;
							while(m>0)
							{

								arr[i][m]=arr[i][m-1];
								m--;
							
						}
						if(m==0)
								{arr[i][m]='';}

			}
		i++;
	}

	j--;

}

disp();


}

function disp()
{

//to count number of''
i=0;
t=0;

	count=0;

	while(i<4)
	{	
		j=0;
 		
			while(j<4)
			{
				if(arr[i][j]=='')
					count++;
				if(arr[i][j]==c[i][j])
				{
					t++;
				}
				

			
		j++;
	}

	i++;

}
//to randomly put value 

i=2;
while(i>1&&count>0&&t!=16)
{
	k=Math.floor((Math.random() * 4) + 0);
	e=Math.floor((Math.random() * 4) + 0);
	j=Math.floor((Math.random() * 20) + 0);
	if(arr[k][e]=='')
	{
		
		if(j==0)
			{
					arr[k][e]=4;
			}
			else
				{arr[k][e]=2;}

	
		i--;
		count++;
		}

}
//to copy arr into c
cop();

//to print
i=0;

d=" ";

while(i<4)
{	d=d+"<tr class=row >";
 j=0;
		while(j<4)

		{
				if(arr[i][j]==2)
				{

				d+="<td class=wh style=background-color:#FCBDF0>"+ arr[i][j]+"</td>";

				}
				else
				if(arr[i][j]==4)
				{

				d+="<td class=wh style=background-color:#F7FCBD>"+ arr[i][j]+"</td>";

				}
				else
				if(arr[i][j]==8)
				{

				d+="<td class=wh style=background-color:#F5C268>"+ arr[i][j]+"</td>";

				}
				else
				if(arr[i][j]==16)
				{

				d+="<td class=wh style=background-color:#F89B5E>"+ arr[i][j]+"</td>";

				}
				else
				if(arr[i][j]==32)
				{

				d+="<td class=wh style=background-color:#F85C21>"+ arr[i][j]+"</td>";

				}
				else
				if(arr[i][j]==64)
				{

				d+="<td class=wh style=background-color:#F73C09>"+ arr[i][j]+"</td>";

				}


				else
				
				d+="<td >"+ arr[i][j]+"</td>";
		j++;
	}
	d+="</tr";
		


	i++;
}
document.getElementById("11").innerHTML=d;
document.getElementById("qq").innerHTML="score:"+score;

if(count==0)
{
	check();
}

}
function check()
{

//function to add same elements
var p=0;
		j=3;

	while(j>0)
	{	
		i=0;
 		
			while(i<4)
			{
				if(arr[i][j]==arr[i][j-1])
					{
						
						p=1;
						break;
						
						}
		i++;
	}
	if(p==1)
		{break;}
	j--;

}


j=0;

	while(j<3)
	{	
		i=0;
 		
			while(i<4)
			{
				if(arr[i][j]==arr[i][j+1])
					{
						p=1;
						break;

			}
		i++;
	}
if(p==1)
		{break;}
	j++;

}

i=3;
while(i>0)
	{	
		j=0;
 		
			while(j<4)
			{
				if(arr[i][j]==arr[i-1][j])
					{
						
						p=1;
						break;

			}
			if(p==1)
		{break;}
		j++;
	}

	i--;

}


	i=0;

	while(i<3)
	{	
		j=0;
 		
			while(j<4)
			{
				if(arr[i][j]==arr[i+1][j])
					{
						
						p=1;
						break;
			}
			if(p==1)
		{break;}
		j++;
	}

	i++;

}

if(p==0)
{
	

	swal({
  title: "oops",
  text: "GAME OVER",
  type: "error",
  showCancelButton: true,
   confirmButtonText: "Play Again",
    cancelButtonText: "exit",
  closeOnConfirm: false,
  showLoaderOnConfirm: true,
},
function(){
  setTimeout(function(){
    swal("GO!!");
  }, 500);
  gee();
});

}

}
function cop()
{

	i=0;

	while(i<4)
	{	
		j=0;
 		
			while(j<4)
			{
				c[i][j]=arr[i][j];
				if(arr[i][j]==2048)
				{alert("voila you made 2048 continue...if you want to");


				}

			
		j++;
	}

	i++;

}
}