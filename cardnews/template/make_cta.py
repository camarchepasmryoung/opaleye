# 커뮤니티 CTA 이미지 2장 만들기 (실제 캡처 + 버튼·상자 실측 크기 분홍 사각형 + 라벨)
# 사용: python3 cardnews/template/make_cta.py <덱 폴더>
import sys
from PIL import Image, ImageDraw, ImageFont
A=sys.argv[1].rstrip('/')+'/assets'; PK=(235,37,96,255)
def font(px): return ImageFont.truetype('/System/Library/Fonts/AppleSDGothicNeo.ttc',px,index=6)
def rect(im,box,r,w): ImageDraw.Draw(im).rounded_rectangle(box,radius=r,outline=PK,width=w)
def tag(im,xy,text,px):
    d=ImageDraw.Draw(im); F=font(px); l,t,rr,b=d.textbbox((0,0),text,font=F); W=rr-l+px*1.3; H=b-t+px*.75
    x,y=xy; d.rounded_rectangle((x,y,x+W,y+H),radius=H/2,fill=PK); d.text((x+px*.65-l,y+px*.375-t),text,font=F,fill=(255,255,255,255))
# 1) 채널 첫 화면 (2배 캡처, 다크). 커뮤니티 버튼 실측 1x (373.7, 392.5, 110.5×40) → 2x
a=Image.open(f'{A}/_raw_channel_2x.png').convert('RGBA').crop((200,470,1520,1000))
bx,by,bw,bh=747-200,785-470,221,80
rect(a,(bx-10,by-10,bx+bw+10,by+bh+10),r=50,w=8); tag(a,(bx+bw+40,by+8),'① 커뮤니티 누르기',40)
a.save(f'{A}/cta_step1_channel.png')
# 2) 커뮤니티 글쓰기 (시영 로그인 캡처 1x). 상자 실측 y281-473 x18-723
b=Image.open(f'{A}/_raw_community_loggedin.png').convert('RGBA').crop((0,212,742,482))
rect(b,(13,281-212-5,728,473-212+5),r=16,w=4); tag(b,(440,150),'② 여기에 질문 쓰고 게시',22)
b.save(f'{A}/cta_step2_write.png')
print(a.size,b.size)
