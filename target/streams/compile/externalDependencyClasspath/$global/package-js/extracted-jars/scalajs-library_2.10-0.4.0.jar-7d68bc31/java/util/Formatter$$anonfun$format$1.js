/** @constructor */
ScalaJS.c.java_util_Formatter$$anonfun$format$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this);
  this.$$outer$2 = null;
  this.format$undin$1$2 = null;
  this.args$1$2 = null
});
ScalaJS.c.java_util_Formatter$$anonfun$format$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.java_util_Formatter$$anonfun$format$1.prototype.constructor = ScalaJS.c.java_util_Formatter$$anonfun$format$1;
ScalaJS.c.java_util_Formatter$$anonfun$format$1.prototype.apply__Ljava_util_Formatter = (function() {
  var fmt = this.format$undin$1$2;
  var lastImplicitIndex = 0;
  var lastIndex = 0;
  while ((!(!fmt))) {
    var x1 = fmt;
    matchEnd9: {
      var o12 = this.$$outer$2.java$util$Formatter$$RegularChunk__Ljava_util_Formatter$RegExpExtractor().unapply__Lscala_scalajs_js_String__Lscala_Option(x1);
      if ((!o12.isEmpty__Z())) {
        var matchResult = o12.get__O();
        fmt = fmt["substring"](matchResult[0]["length"]);
        this.$$outer$2.java$util$Formatter$$dest__Ljava_lang_Appendable().append__Ljava_lang_CharSequence__Ljava_lang_Appendable(matchResult[0]);
        break matchEnd9
      };
      var o14 = this.$$outer$2.java$util$Formatter$$DoublePercent__Ljava_util_Formatter$RegExpExtractor().unapply__Lscala_scalajs_js_String__Lscala_Option(x1);
      if ((!o14.isEmpty__Z())) {
        fmt = fmt["substring"](2);
        this.$$outer$2.java$util$Formatter$$dest__Ljava_lang_Appendable().append__C__Ljava_lang_Appendable(37);
        break matchEnd9
      };
      var o16 = this.$$outer$2.java$util$Formatter$$EOLChunk__Ljava_util_Formatter$RegExpExtractor().unapply__Lscala_scalajs_js_String__Lscala_Option(x1);
      if ((!o16.isEmpty__Z())) {
        fmt = fmt["substring"](2);
        this.$$outer$2.java$util$Formatter$$dest__Ljava_lang_Appendable().append__C__Ljava_lang_Appendable(10);
        break matchEnd9
      };
      var o18 = this.$$outer$2.java$util$Formatter$$FormattedChunk__Ljava_util_Formatter$RegExpExtractor().unapply__Lscala_scalajs_js_String__Lscala_Option(x1);
      if ((!o18.isEmpty__Z())) {
        var matchResult$2 = o18.get__O();
        fmt = fmt["substring"](matchResult$2[0]["length"]);
        var flags = matchResult$2[2];
        var indexStr = matchResult$2[1];
        if ((!(!indexStr))) {
          var index = ScalaJS.g["parseInt"](indexStr)
        } else {
          if (this.hasFlag$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Lscala_scalajs_js_Boolean("<", flags)) {
            var index = lastIndex
          } else {
            lastImplicitIndex = (lastImplicitIndex + 1);
            var index = lastImplicitIndex
          }
        };
        lastIndex = index;
        if (((index <= 0) || (index > this.args$1$2.underlying.length))) {
          throw new ScalaJS.c.java_util_MissingFormatArgumentException().init___T(matchResult$2[5])
        };
        var arg = ScalaJS.modules.scala_scalajs_js_Any().fromArray__O__Lscala_scalajs_js_Array(this.args$1$2)[(index - 1)];
        var widthStr = matchResult$2[3];
        var hasWidth = (!(!widthStr));
        if (hasWidth) {
          var width = ScalaJS.g["parseInt"](widthStr)
        } else {
          var width = 0
        };
        var precisionStr = matchResult$2[4];
        var hasPrecision = (!(!precisionStr));
        if (hasPrecision) {
          var precision = ScalaJS.g["parseInt"](precisionStr)
        } else {
          var precision = 0
        };
        var conversion = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(matchResult$2[5], 0);
        var x1$2 = conversion;
        switch (x1$2) {
          case 98:
            /*<skip>*/;
          case 66:
            {
              var x1$3 = arg;
              matchEnd5: {
                if (ScalaJS.anyRefEqEq(null, x1$3)) {
                  var jsx$1 = "false";
                  break matchEnd5
                };
                if (ScalaJS.is.java_lang_Boolean(x1$3)) {
                  var x3 = ScalaJS.as.java_lang_Boolean(x1$3);
                  var jsx$1 = ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__O__T(x3);
                  break matchEnd5
                };
                var jsx$1 = "true";
                break matchEnd5
              };
              this.pad$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Ljava_lang_Boolean__Lscala_scalajs_js_String__Lscala_scalajs_js_Number__C__Ljava_lang_Appendable(jsx$1, this.pad$default$2$1__p2__Lscala_scalajs_js_String(), this.pad$default$3$1__p2__Ljava_lang_Boolean(), flags, width, conversion);
              break
            };
          case 104:
            /*<skip>*/;
          case 72:
            {
              if ((arg === null)) {
                var jsx$2 = "null"
              } else {
                var jsx$2 = ScalaJS.modules.java_lang_Integer().toHexString__I__T(ScalaJS.objectHashCode(arg))
              };
              this.pad$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Ljava_lang_Boolean__Lscala_scalajs_js_String__Lscala_scalajs_js_Number__C__Ljava_lang_Appendable(jsx$2, this.pad$default$2$1__p2__Lscala_scalajs_js_String(), this.pad$default$3$1__p2__Ljava_lang_Boolean(), flags, width, conversion);
              break
            };
          case 115:
            /*<skip>*/;
          case 83:
            {
              var x1$4 = arg;
              matchEnd6: {
                if (ScalaJS.anyRefEqEq(null, x1$4)) {
                  if ((!this.hasFlag$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Lscala_scalajs_js_Boolean("#", flags))) {
                    this.pad$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Ljava_lang_Boolean__Lscala_scalajs_js_String__Lscala_scalajs_js_Number__C__Ljava_lang_Appendable("null", this.pad$default$2$1__p2__Lscala_scalajs_js_String(), this.pad$default$3$1__p2__Ljava_lang_Boolean(), flags, width, conversion);
                    break matchEnd6
                  }
                };
                if (ScalaJS.is.java_util_Formattable(x1$4)) {
                  var x3$2 = ScalaJS.as.java_util_Formattable(x1$4);
                  if (this.hasFlag$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Lscala_scalajs_js_Boolean("-", flags)) {
                    var jsx$6 = ScalaJS.modules.java_util_FormattableFlags().LEFT$undJUSTIFY__I()
                  } else {
                    var jsx$6 = 0
                  };
                  if (this.hasFlag$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Lscala_scalajs_js_Boolean("#", flags)) {
                    var jsx$5 = ScalaJS.modules.java_util_FormattableFlags().ALTERNATE__I()
                  } else {
                    var jsx$5 = 0
                  };
                  var jsx$4 = (jsx$6 | jsx$5);
                  if (ScalaJS.modules.scala_runtime_RichChar().isUpper$extension__C__Z(ScalaJS.modules.scala_Predef().charWrapper__C__C(conversion))) {
                    var jsx$3 = ScalaJS.modules.java_util_FormattableFlags().UPPERCASE__I()
                  } else {
                    var jsx$3 = 0
                  };
                  var flags$2 = (jsx$4 | jsx$3);
                  var jsx$11 = x3$2;
                  var jsx$10 = this.$$outer$2;
                  var jsx$9 = flags$2;
                  if (hasWidth) {
                    var jsx$8 = (width | 0)
                  } else {
                    var jsx$8 = -1
                  };
                  if (hasPrecision) {
                    var jsx$7 = (precision | 0)
                  } else {
                    var jsx$7 = -1
                  };
                  jsx$11.formatTo__Ljava_util_Formatter__I__I__I__V(jsx$10, jsx$9, jsx$8, jsx$7);
                  ScalaJS.modules.scala_None();
                  break matchEnd6
                };
                if ((x1$4 !== null)) {
                  var x4 = x1$4;
                  if ((!this.hasFlag$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Lscala_scalajs_js_Boolean("#", flags))) {
                    this.pad$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Ljava_lang_Boolean__Lscala_scalajs_js_String__Lscala_scalajs_js_Number__C__Ljava_lang_Appendable(ScalaJS.objectToString(x4), this.pad$default$2$1__p2__Lscala_scalajs_js_String(), this.pad$default$3$1__p2__Ljava_lang_Boolean(), flags, width, conversion);
                    break matchEnd6
                  }
                };
                throw new ScalaJS.c.java_util_FormatFlagsConversionMismatchException().init___T__C("#", 115)
              };
              break
            };
          case 99:
            /*<skip>*/;
          case 67:
            {
              this.pad$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Ljava_lang_Boolean__Lscala_scalajs_js_String__Lscala_scalajs_js_Number__C__Ljava_lang_Appendable(ScalaJS.g["String"]["fromCharCode"](this.numberArg$1__p2__O__Lscala_scalajs_js_Number(arg)), this.pad$default$2$1__p2__Lscala_scalajs_js_String(), this.pad$default$3$1__p2__Ljava_lang_Boolean(), flags, width, conversion);
              break
            };
          case 100:
            {
              this.with$und$plus$1__p2__Lscala_scalajs_js_String__Z__Lscala_scalajs_js_String__Lscala_scalajs_js_Number__C__Ljava_lang_Appendable(ScalaJS.objectToString(this.numberArg$1__p2__O__Lscala_scalajs_js_Number(arg)), this.with$und$plus$default$2$1__p2__Z(), flags, width, conversion);
              break
            };
          case 111:
            {
              var x1$5 = arg;
              matchEnd8: {
                if (ScalaJS.is.java_lang_Byte(x1$5)) {
                  var x2 = ScalaJS.as.java_lang_Byte(x1$5);
                  var str$2 = this.pseudoUnsignedArgStr$1__p2__Lscala_scalajs_js_Number__Lscala_scalajs_js_Number__Lscala_scalajs_js_Number__Lscala_scalajs_js_String(x2.byteValue__B(), 128, 8);
                  break matchEnd8
                };
                if (ScalaJS.is.java_lang_Short(x1$5)) {
                  var x3$3 = ScalaJS.as.java_lang_Short(x1$5);
                  var str$2 = this.pseudoUnsignedArgStr$1__p2__Lscala_scalajs_js_Number__Lscala_scalajs_js_Number__Lscala_scalajs_js_Number__Lscala_scalajs_js_String(x3$3.shortValue__S(), 32768, 8);
                  break matchEnd8
                };
                if (ScalaJS.is.java_lang_Integer(x1$5)) {
                  var x4$2 = ScalaJS.as.java_lang_Integer(x1$5);
                  var str$2 = ScalaJS.modules.java_lang_Integer().toOctalString__I__T(ScalaJS.modules.scala_Predef().Integer2int__Ljava_lang_Integer__I(x4$2));
                  break matchEnd8
                };
                if (ScalaJS.is.java_lang_Long(x1$5)) {
                  var x5 = ScalaJS.as.java_lang_Long(x1$5);
                  var str$2 = ScalaJS.modules.java_lang_Long().toOctalString__J__T(ScalaJS.modules.scala_Predef().Long2long__Ljava_lang_Long__J(x5));
                  break matchEnd8
                };
                if ((typeof(x1$5) === "number")) {
                  var x6 = x1$5;
                  var str$2 = x6["toString"](8);
                  break matchEnd8
                };
                throw new ScalaJS.c.scala_MatchError().init___O(x1$5)
              };
              var jsx$13 = str$2;
              if (this.hasFlag$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Lscala_scalajs_js_Boolean("#", flags)) {
                var jsx$12 = "0"
              } else {
                var jsx$12 = ""
              };
              this.padCaptureSign$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Lscala_scalajs_js_Number__C__Ljava_lang_Appendable(jsx$13, jsx$12, flags, width, conversion);
              break
            };
          case 120:
            /*<skip>*/;
          case 88:
            {
              var x1$6 = arg;
              matchEnd8$2: {
                if (ScalaJS.is.java_lang_Byte(x1$6)) {
                  var x2$2 = ScalaJS.as.java_lang_Byte(x1$6);
                  var str$3 = this.pseudoUnsignedArgStr$1__p2__Lscala_scalajs_js_Number__Lscala_scalajs_js_Number__Lscala_scalajs_js_Number__Lscala_scalajs_js_String(x2$2.byteValue__B(), 128, 16);
                  break matchEnd8$2
                };
                if (ScalaJS.is.java_lang_Short(x1$6)) {
                  var x3$4 = ScalaJS.as.java_lang_Short(x1$6);
                  var str$3 = this.pseudoUnsignedArgStr$1__p2__Lscala_scalajs_js_Number__Lscala_scalajs_js_Number__Lscala_scalajs_js_Number__Lscala_scalajs_js_String(x3$4.shortValue__S(), 32768, 16);
                  break matchEnd8$2
                };
                if (ScalaJS.is.java_lang_Integer(x1$6)) {
                  var x4$3 = ScalaJS.as.java_lang_Integer(x1$6);
                  var str$3 = ScalaJS.modules.java_lang_Integer().toHexString__I__T(ScalaJS.modules.scala_Predef().Integer2int__Ljava_lang_Integer__I(x4$3));
                  break matchEnd8$2
                };
                if (ScalaJS.is.java_lang_Long(x1$6)) {
                  var x5$2 = ScalaJS.as.java_lang_Long(x1$6);
                  var str$3 = ScalaJS.modules.java_lang_Long().toHexString__J__T(ScalaJS.modules.scala_Predef().Long2long__Ljava_lang_Long__J(x5$2));
                  break matchEnd8$2
                };
                if ((typeof(x1$6) === "number")) {
                  var x6$2 = x1$6;
                  var str$3 = x6$2["toString"](16);
                  break matchEnd8$2
                };
                throw new ScalaJS.c.scala_MatchError().init___O(x1$6)
              };
              var jsx$15 = str$3;
              if (this.hasFlag$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Lscala_scalajs_js_Boolean("#", flags)) {
                var jsx$14 = "0x"
              } else {
                var jsx$14 = ""
              };
              this.padCaptureSign$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Lscala_scalajs_js_Number__C__Ljava_lang_Appendable(jsx$15, jsx$14, flags, width, conversion);
              break
            };
          case 101:
            /*<skip>*/;
          case 69:
            {
              if (hasPrecision) {
                var jsx$16 = precision
              } else {
                var jsx$16 = 6
              };
              this.sciNotation$1__p2__Lscala_scalajs_js_Number__Lscala_scalajs_js_String__O__Lscala_scalajs_js_Number__C__Ljava_lang_Appendable(jsx$16, flags, arg, width, conversion);
              break
            };
          case 103:
            /*<skip>*/;
          case 71:
            {
              var m = ScalaJS.g["Math"]["abs"](this.numberArg$1__p2__O__Lscala_scalajs_js_Number(arg));
              if ((!hasPrecision)) {
                var p = 6
              } else {
                if ((precision === 0)) {
                  var p = 1
                } else {
                  var p = precision
                }
              };
              if (((m >= 1.0E-4) && (m < ScalaJS.g["Math"]["pow"](10, p)))) {
                var sig = ScalaJS.g["Math"]["ceil"]((ScalaJS.g["Math"]["log"](m) / ScalaJS.g["Math"]["LN10"]));
                this.with$und$plus$1__p2__Lscala_scalajs_js_String__Z__Lscala_scalajs_js_String__Lscala_scalajs_js_Number__C__Ljava_lang_Appendable(this.numberArg$1__p2__O__Lscala_scalajs_js_Number(arg)["toFixed"](ScalaJS.g["Math"]["max"]((p - sig), 0)), this.with$und$plus$default$2$1__p2__Z(), flags, width, conversion)
              } else {
                this.sciNotation$1__p2__Lscala_scalajs_js_Number__Lscala_scalajs_js_String__O__Lscala_scalajs_js_Number__C__Ljava_lang_Appendable((p - 1), flags, arg, width, conversion)
              };
              break
            };
          case 102:
            {
              if (hasPrecision) {
                var jsx$17 = this.numberArg$1__p2__O__Lscala_scalajs_js_Number(arg)["toFixed"](precision)
              } else {
                var jsx$17 = this.numberArg$1__p2__O__Lscala_scalajs_js_Number(arg)["toFixed"](6)
              };
              this.with$und$plus$1__p2__Lscala_scalajs_js_String__Z__Lscala_scalajs_js_String__Lscala_scalajs_js_Number__C__Ljava_lang_Appendable(jsx$17, (!ScalaJS.g["isFinite"](this.numberArg$1__p2__O__Lscala_scalajs_js_Number(arg))), flags, width, conversion);
              break
            };
          default:
            throw new ScalaJS.c.scala_MatchError().init___O(ScalaJS.bC(x1$2));
        };
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd9
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    }
  };
  return this.$$outer$2
});
ScalaJS.c.java_util_Formatter$$anonfun$format$1.prototype.apply__O = (function() {
  return this.apply__Ljava_util_Formatter()
});
ScalaJS.c.java_util_Formatter$$anonfun$format$1.prototype.hasFlag$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Lscala_scalajs_js_Boolean = (function(flag, flags$1) {
  return (flags$1["indexOf"](flag) >= 0)
});
ScalaJS.c.java_util_Formatter$$anonfun$format$1.prototype.numberArg$1__p2__O__Lscala_scalajs_js_Number = (function(arg$1) {
  var x1 = arg$1;
  if (ScalaJS.is.java_lang_Number(x1)) {
    var x2 = ScalaJS.as.java_lang_Number(x1);
    return x2.doubleValue__D()
  };
  if (ScalaJS.is.java_lang_Character(x1)) {
    var x3 = ScalaJS.as.java_lang_Character(x1);
    return x3.charValue__C()
  };
  if ((typeof(x1) === "number")) {
    var x4 = x1;
    return x4
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.java_util_Formatter$$anonfun$format$1.prototype.pseudoUnsignedArgStr$1__p2__Lscala_scalajs_js_Number__Lscala_scalajs_js_Number__Lscala_scalajs_js_Number__Lscala_scalajs_js_String = (function(x, threshold, base) {
  if ((x >= 0)) {
    if ((x >= threshold)) {
      return ("+" + x["toString"](base))
    } else {
      return x["toString"](base)
    }
  } else {
    if ((x < (-threshold))) {
      return x["toString"](base)
    } else {
      return ((threshold << 1) + x)["toString"](base)
    }
  }
});
ScalaJS.c.java_util_Formatter$$anonfun$format$1.prototype.padCaptureSign$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Lscala_scalajs_js_Number__C__Ljava_lang_Appendable = (function(argStr, prefix, flags$1, width$1, conversion$1) {
  var firstChar = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(argStr, 0);
  if (((firstChar === 43) || (firstChar === 45))) {
    return this.pad$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Ljava_lang_Boolean__Lscala_scalajs_js_String__Lscala_scalajs_js_Number__C__Ljava_lang_Appendable(argStr["substring"](1), (ScalaJS.bC(firstChar) + prefix), this.pad$default$3$1__p2__Ljava_lang_Boolean(), flags$1, width$1, conversion$1)
  } else {
    return this.pad$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Ljava_lang_Boolean__Lscala_scalajs_js_String__Lscala_scalajs_js_Number__C__Ljava_lang_Appendable(argStr, prefix, this.pad$default$3$1__p2__Ljava_lang_Boolean(), flags$1, width$1, conversion$1)
  }
});
ScalaJS.c.java_util_Formatter$$anonfun$format$1.prototype.strRepeat$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_Number__Lscala_scalajs_js_String = (function(s, times) {
  var result = "";
  var i = times;
  while ((i > 0)) {
    result = (result + s);
    i = (i - 1)
  };
  return result
});
ScalaJS.c.java_util_Formatter$$anonfun$format$1.prototype.with$und$plus$1__p2__Lscala_scalajs_js_String__Z__Lscala_scalajs_js_String__Lscala_scalajs_js_Number__C__Ljava_lang_Appendable = (function(s, preventZero, flags$1, width$1, conversion$1) {
  if ((ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(s, 0) !== 45)) {
    if (this.hasFlag$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Lscala_scalajs_js_Boolean("+", flags$1)) {
      return this.pad$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Ljava_lang_Boolean__Lscala_scalajs_js_String__Lscala_scalajs_js_Number__C__Ljava_lang_Appendable(s, "+", ScalaJS.modules.scala_Predef().boolean2Boolean__Z__Ljava_lang_Boolean(preventZero), flags$1, width$1, conversion$1)
    } else {
      if (this.hasFlag$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Lscala_scalajs_js_Boolean(" ", flags$1)) {
        return this.pad$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Ljava_lang_Boolean__Lscala_scalajs_js_String__Lscala_scalajs_js_Number__C__Ljava_lang_Appendable(s, " ", ScalaJS.modules.scala_Predef().boolean2Boolean__Z__Ljava_lang_Boolean(preventZero), flags$1, width$1, conversion$1)
      } else {
        return this.pad$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Ljava_lang_Boolean__Lscala_scalajs_js_String__Lscala_scalajs_js_Number__C__Ljava_lang_Appendable(s, "", ScalaJS.modules.scala_Predef().boolean2Boolean__Z__Ljava_lang_Boolean(preventZero), flags$1, width$1, conversion$1)
      }
    }
  } else {
    if (this.hasFlag$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Lscala_scalajs_js_Boolean("(", flags$1)) {
      return this.pad$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Ljava_lang_Boolean__Lscala_scalajs_js_String__Lscala_scalajs_js_Number__C__Ljava_lang_Appendable((s["substring"](1) + ")"), "(", ScalaJS.modules.scala_Predef().boolean2Boolean__Z__Ljava_lang_Boolean(preventZero), flags$1, width$1, conversion$1)
    } else {
      return this.pad$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Ljava_lang_Boolean__Lscala_scalajs_js_String__Lscala_scalajs_js_Number__C__Ljava_lang_Appendable(s["substring"](1), "-", ScalaJS.modules.scala_Predef().boolean2Boolean__Z__Ljava_lang_Boolean(preventZero), flags$1, width$1, conversion$1)
    }
  }
});
ScalaJS.c.java_util_Formatter$$anonfun$format$1.prototype.with$und$plus$default$2$1__p2__Z = (function() {
  return false
});
ScalaJS.c.java_util_Formatter$$anonfun$format$1.prototype.pad$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Ljava_lang_Boolean__Lscala_scalajs_js_String__Lscala_scalajs_js_Number__C__Ljava_lang_Appendable = (function(argStr, prefix, preventZero, flags$1, width$1, conversion$1) {
  var prePadLen = (argStr["length"] + prefix["length"]);
  if ((width$1 <= prePadLen)) {
    var padStr = (prefix + argStr)
  } else {
    var padRight = this.hasFlag$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Lscala_scalajs_js_Boolean("-", flags$1);
    var padZero = (this.hasFlag$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_String__Lscala_scalajs_js_Boolean("0", flags$1) && (!ScalaJS.modules.scala_Predef().Boolean2boolean__Ljava_lang_Boolean__Z(preventZero)));
    var padLength = (width$1 - prePadLen);
    if (padZero) {
      var padChar = "0"
    } else {
      var padChar = " "
    };
    var padding = this.strRepeat$1__p2__Lscala_scalajs_js_String__Lscala_scalajs_js_Number__Lscala_scalajs_js_String(padChar, padLength);
    if ((padZero && padRight)) {
      throw new ScalaJS.c.java_util_IllegalFormatFlagsException().init___T(flags$1)
    } else {
      if (padRight) {
        var padStr = ((prefix + argStr) + padding)
      } else {
        if (padZero) {
          var padStr = ((prefix + padding) + argStr)
        } else {
          var padStr = ((padding + prefix) + argStr)
        }
      }
    }
  };
  if (ScalaJS.modules.scala_runtime_RichChar().isUpper$extension__C__Z(ScalaJS.modules.scala_Predef().charWrapper__C__C(conversion$1))) {
    var casedStr = padStr["toUpperCase"]()
  } else {
    var casedStr = padStr
  };
  return this.$$outer$2.java$util$Formatter$$dest__Ljava_lang_Appendable().append__Ljava_lang_CharSequence__Ljava_lang_Appendable(casedStr)
});
ScalaJS.c.java_util_Formatter$$anonfun$format$1.prototype.pad$default$2$1__p2__Lscala_scalajs_js_String = (function() {
  return ""
});
ScalaJS.c.java_util_Formatter$$anonfun$format$1.prototype.pad$default$3$1__p2__Ljava_lang_Boolean = (function() {
  return ScalaJS.modules.scala_Predef().boolean2Boolean__Z__Ljava_lang_Boolean(false)
});
ScalaJS.c.java_util_Formatter$$anonfun$format$1.prototype.sciNotation$1__p2__Lscala_scalajs_js_Number__Lscala_scalajs_js_String__O__Lscala_scalajs_js_Number__C__Ljava_lang_Appendable = (function(precision, flags$1, arg$1, width$1, conversion$1) {
  var exp = this.numberArg$1__p2__O__Lscala_scalajs_js_Number(arg$1)["toExponential"](precision);
  if (("e" === exp["charAt"]((exp["length"] - 3)))) {
    var jsx$18 = ((exp["substring"](0, (exp["length"] - 1)) + "0") + exp["charAt"]((exp["length"] - 1)))
  } else {
    var jsx$18 = exp
  };
  return this.with$und$plus$1__p2__Lscala_scalajs_js_String__Z__Lscala_scalajs_js_String__Lscala_scalajs_js_Number__C__Ljava_lang_Appendable(jsx$18, (!ScalaJS.g["isFinite"](this.numberArg$1__p2__O__Lscala_scalajs_js_Number(arg$1))), flags$1, width$1, conversion$1)
});
ScalaJS.c.java_util_Formatter$$anonfun$format$1.prototype.init___Ljava_util_Formatter__T__AO = (function($$outer, format_in$1, args$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  this.format$undin$1$2 = format_in$1;
  this.args$1$2 = args$1;
  ScalaJS.c.scala_runtime_AbstractFunction0.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_util_Formatter$$anonfun$format$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_Formatter$$anonfun$format$1.prototype = ScalaJS.c.java_util_Formatter$$anonfun$format$1.prototype;
ScalaJS.is.java_util_Formatter$$anonfun$format$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_Formatter$$anonfun$format$1)))
});
ScalaJS.as.java_util_Formatter$$anonfun$format$1 = (function(obj) {
  if ((ScalaJS.is.java_util_Formatter$$anonfun$format$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.Formatter$$anonfun$format$1")
  }
});
ScalaJS.isArrayOf.java_util_Formatter$$anonfun$format$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_Formatter$$anonfun$format$1)))
});
ScalaJS.asArrayOf.java_util_Formatter$$anonfun$format$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_Formatter$$anonfun$format$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.Formatter$$anonfun$format$1;", depth)
  }
});
ScalaJS.data.java_util_Formatter$$anonfun$format$1 = new ScalaJS.ClassTypeData({
  java_util_Formatter$$anonfun$format$1: 0
}, false, "java.util.Formatter$$anonfun$format$1", ScalaJS.data.scala_runtime_AbstractFunction0, {
  java_util_Formatter$$anonfun$format$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_Formatter$$anonfun$format$1.prototype.$classData = ScalaJS.data.java_util_Formatter$$anonfun$format$1;
//@ sourceMappingURL=Formatter$$anonfun$format$1.js.map
