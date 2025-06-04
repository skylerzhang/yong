# Yong(使用)


[caniuse.com](caniuse.com) in your command line.


---

## Install

```bash
$ npm install yong -g
```

## Usage

I set up a simple server with nodejs and [jae](http://jae.jd.com/).

The data is fetched from [github/caniuse](https://github.com/Fyrd/caniuse).

Check a css property.

```bash
$ yong border-radius
```

![ ](http://www.skylerzhang.com/assets/images/yong.jpg)

```
 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 CSS3 Border-radius (rounded corners)  (种类:CSS3)
 ~ie
  6:n   7:n   8:n   9:y   10:y   11:y   5.5:n   TP:y
 ~firefox
  2:a x   3:y x   4:y   5:y   6:y   7:y   8:y   9:y   10:y   11:y   12:y   13:y   14:y   15:y   16:y   17:y   18:y   19:y   20:y   21:y   22:y   23:y   24:y   25:y   26:y   27:y   28:y   29:y   30:y   31:y   32:y   33:y   34:y   35:y   36:y   37:y   38:y   3.5:y x   3.6:y x
 ~chrome
  4:y x   5:y   6:y   7:y   8:y   9:y   10:y   11:y   12:y   13:y   14:y   15:y   16:y   17:y   18:y   19:y   20:y   21:y   22:y   23:y   24:y   25:y   26:y   27:y   28:y   29:y   30:y   31:y   32:y   33:y   34:y   35:y   36:y   37:y   38:y   39:y   40:y   41:y   42:y
 ~safari
  4:y x   5:y   6:y   7:y   8:y   3.1:y x   3.2:y x   5.1:y   6.1:y   7.1:y
 ~opera
  9:n   11:y   12:y   15:y   16:y   17:y   18:y   19:y   20:y   21:y   22:y   23:y   24:y   25:y   26:y   27:y   28:y   9.5-9.6:n   10.0-10.1:n   10.5:y   10.6:y   11.1:y   11.5:y   11.6:y   12.1:y
 ~ios_saf
  8:y   3.2:y x   4.0-4.1:y   4.2-4.3:y   5.0-5.1:y   6.0-6.1:y   7.0-7.1:y   8.1:y
 ~op_mini
  5.0-8.0:n
 ~android
  3:y   4:y   37:y   2.1:y x   2.2:y   2.3:y   4.1:y   4.2-4.3:y   4.4:y   4.4.3-4.4.4:y
 ~bb
  7:y   10:y
 ~op_mob
  10:n   11:y   12:y   24:y   11.1:y   11.5:y   12.1:y
 ~and_chr
  39:y
 ~and_ff
  33:y
 ~ie_mob
  10:y   11:y
 ~and_uc
  9.9:y
 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
```

y => yes  means you can use this css property in this browser version.

n => no  means you can't use this css property in this browser version.

y x  means you can use, but you need to add a prefix like `-moz-`,`-webkit-`,`-o-`,`-ms-`.

## Option

```bash
$ yong border-radius -b ie
```

![ ](http://www.skylerzhang.com/assets/images/yong-b.jpg)

```
  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  CSS3 Border-radius (rounded corners)  (种类:CSS3)
  ~ie
   6:n   7:n   8:n   9:y   10:y   11:y   5.5:n   TP:y
  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
```

## LICENSE

MIT.