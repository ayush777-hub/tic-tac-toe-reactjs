#include <bits/stdc++.h>
using namespace std;


int  main() {
	// your code goes here
	long long n;
	cin >> n; 
	map<string, long long >observe;
	map<long long, string>index;
	for(long long i=0;i<n;i++)
	{
	    string str;
	    long long cost;
	    cin >> str >> cost ;
	    observe[str] = cost;
	    index[i+1] = str;
	}
	
	map<string, long long> cost;
	for(long long i=0;i<n;i++)
	{
	    string str;
	    long long c;
	    cin >> str >> c ;
	    cost[str] = c;
	}
	
	map<pair<string,string>, long long>pairCost;
	for(long long i=0;i<n*(n-1)/2;i++)
	{
	    string a,b;
	    long long c;
	    cin >> a >> b >>c;
	    pairCost[{a,b}] = pairCost[{b,a} ] = c;
	}
	
	vector<bool> visited(n+1, 0);
	long long node = 0 ;
	long long ans = 0 ;
	for(long long i=0;i<=n;i++)
	{
	    long long next = -1, nextCost = long long_MAX;
	    visited[node] = 1;
	    
	    for(long long j=1;j<=n;j++) // for n nodes total visit
	    {
	        if(i == 0) // if i == 0 , take the dist min from zero
	        {
	            if(cost[index[j]] < nextCost)
	            {
	                next =  j;
	                nextCost = cost[index[j]];
	            }
	        }
	        else // take min distance from that node
	        {
	            if(!visited[j] && nextCost > pairCost[{index[node], index[j]}])
    	        {
    	            next = j;
    	            nextCost = pairCost[{index[node], index[j]}];
    	        }   
	        }
	    }
	    
	    if(next != -1) 
	    {
	        ans += observe[index[next]]; // add observation cost
	        ans += nextCost; // add travelling cost
	    }
	   
        
	    if( i == n) // for the last node add the return cost to 0
	    {
	        ans += cost[index[node]];
	    }
        node = next; // override node
	    
	}
	cout << ans << "\n";
// 	return 0;
}
