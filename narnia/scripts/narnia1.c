#include <stdio.h>

int main(){
        int (*ret)();

        if(getenv("EGG")==NULL){    
                printf("Give me something to execute at the env-variable EGG\n");
                exit(1);
        }

        printf("Trying to execute EGG!\n");
        ret = getenv("EGG");
	printf("input:\nEGG env:\t\t\t%04X\nret:\t\t\t\t%04X\ncontrol value (000A):\t\t%04X\npointer to address:\t\t%04X\n", getenv("EGG"), ret,10, (void*)ret);

	sleep(10);
        ret();

	exit(1);
}

