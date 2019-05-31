
byte[] data = loadBytes("banana.npy");

// number of drawings to save
int total = 1000;
// number of pixels in one drawing ( 28x28 )
int imgPixels = 784;
// here we will store data with these 1000 drawings
byte[] outdata = new byte[total * imgPixels];

int outindex = 0;
for (int n = 0; n < total; n++) {
// 80 - header bytes
int start = 80 + n * imgPixels;
for (int i = 0; i < imgPixels; i++) {
  int index = i + start;
  byte val = data[index];
  outdata[outindex] = val;
  outindex++;
  }
}

saveBytes("banana1000.bin", outdata);
