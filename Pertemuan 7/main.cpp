#include <iostream>

using namespace std;

int main()
{
    float temp;
    cin >> temp;
    if (temp <=0) {
        cout << "ICE";

    }else if (temp > 100) {
        cout << "GAS";
    }
     else {
        cout << "LIQUID";
     }
    return 0;
}

