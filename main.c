#include <stdbool.h>
#include <malloc.h>
#include <stdio.h>

//顺序表（静态）
#define MaxSize 50 //定义线性表的最大长度。
typedef struct{
    int a[MaxSize];
    int length;
}SqList;

//顺序表（动态）
//#define InitSize 100
typedef struct{
    int *data;
    int maxsize,length;
} SeqList;

//顺序表的插入
bool ListInsert(SqList L,int i, int e){     //for c++: bool ListInsert(SqList &L, int i, int e)
    if (i<1||i>L.length+1)                  //判断i范围
        return false;
    if (L.length>=MaxSize)                  //判断储存空间是否已满
        return false;
    for (int j = L.length; j >= i; j--)    //将第i个元素及之后元素后移
        L.data[j] = L.data[j-1];
    L.data[i-1] = e;
    L.length++;                         //线性表长度加1
    return true;
}

//顺序表的删除
bool ListDelete(SqList L, int i, int e){  //for c++: bool ListDelete(SqList &L, int i, int &e)
    if (i<1||i>L.length+1)                  //判断i范围
        return false;
    e=L.data[i-1];                          //将被删除的元素值赋给e
    for (int j =i;j<L.length;j++)           //将第i个元素之后元素前移
        L.data[j-1]=L.data[j];
    L.length--;
}

//按值查找
/*
 * 时间复杂度的分析：
 * 最好情况：就在表头O(1)
 * 最坏情况：就在表尾O(n)
 * 平均情况：（n+1）/2 O(n)
 */
int LocateElem(SqList L, int e){
    int i;
    for (int i = 0; i < L.length; i++) {
        if (L.data[i]==e)
            return i+1;                     //下标为i的元素值等于e,返回其位序i+1
    return 0;
    }
}

//单链表
typedef struct LNode{
    int data;                   //数据域   ElemType data;
    struct LNode *next;         //指针域
}LNode, *LinkList;

//头插法建立单链表
/*
 * 新结点插入到链表的头结点之后，读入顺序与生成链表中元素顺序相反
 * 每个结点插入时间O(1)
 * 总时间复杂度O(n)
 */
LinkList List_HeadInsert(LinkList L){           //逆向建立单链表 For C++: LinkList Link_HeadInsert(LinkList &L)
    LNode *s; int x;
    L = (LinkList)malloc(sizeof(LNode));        //创建头结点
    L->next = NULL;                             //初始空链表
    scanf("%d",&x);                     //输入结点的值
    while (x!=9999){                            //输入9999结束
        s = (LNode*)malloc(sizeof(LNode));      //创建新结点
        s->data = x;
        s->next = L->next;
        L->next = s;                            //将新结点插入表中，L为头指针
        scanf("%d",&x);
    }
    return L;
}

//尾插法建立单链表
/*
 * 时间复杂度同头插法
 */
LinkList List_TailInsert(LinkList L){           //正向建立单链表 For C++：LinkList List_TailInsert(LinkList &L)
    int x;                                      //设元素类型为整型
    L = (LinkList)malloc(sizeof(LNode));        //头结点
    LNode *s,*r=L;                              //r为表尾指针
    scanf("%d",&x);
    while (x!=9999){
        s = (LNode *)malloc(sizeof(LNode));
        s->data = x;
        r->next = s;
        r = s;                                  //r指向新的表尾结点
        scanf("%d",&x);
    }
    r->next = NULL;                             //尾结点指针置空
    return L;
}

//按序号查找结点值
/*时间复杂度O(n)*/
LNode *GetElem(LinkList L,int i){
    int j=1;                            //计数，初始为1，
    LNode *p = L->next;
    if (i==0)
        return L;
    if (i<1)
        return NULL;
    while (p&&j<i){
        p = p->next;
        j++;
    }
    return p;
}

//按值查找
/*时间复杂度为O(n)*/
LNode *LocateElem(LinkList L, int e){
    LNode *p = L->next;
    while (p!=NULL&&p->data!=e)
        p=p->next;
    return p;                           //找到后返回该指针，否则返回NULL
}

//双链表的结点声明
typedef  struct DNode{      //定义双链表结点类型
    int data;               //数据域   ElemType data；
    struct DNode *prior, *next;
}DNode, *DLinkList;

//双链表的后插操作
/* 结点P后插入结点*s
 * 1. s->next = p->next;
 * 2. p->next->prior = s;
 * 3. s->prior = p;
 * 4. p->next = s;
 * 1.2两步必须在4步之前
 * */

//双链表的前插操作
/* 结点P前插入结点*s
 * 1. p->prior->next = s;
 * 2. s->prior = p->prior;
 * 3. s->next = p;
 * 4. p->prior = s;
 * */

//双链表的后驱结点删除操作
/* 结点*p后删除结点*q
 * p->next = q->next;
 * q->next->prior = p;
 * free(q);
 * */

//双链表的前驱结点删除操作
/* 结点*p前删除结点*q
 * q->prior->next = p;
 * p->prior = q->prior;
 * free(q);
 * */

//循环链表
//循环单链表：表尾结点的next指向头结点 & 循环双链表：表头结点prior指向尾结点，表尾结点的next指向表头结点
//形成闭环

//顺序栈的实现
typedef struct{
    int data[MaxSize];
    int top;
}SqStack;

//初始化
void InitStack(SqStack S){      // For C++: void InitStack(SqStack &S)
    S.top = -1;                 //初始化栈顶指针
}




