/** @constructor */
ScalaJS.c.scala_runtime_BoxesRunTime$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.constructor = ScalaJS.c.scala_runtime_BoxesRunTime$;
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.boxToBoolean__Z__Ljava_lang_Boolean = (function(b) {
  return ScalaJS.modules.java_lang_Boolean().valueOf__Z__Ljava_lang_Boolean(b)
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.boxToCharacter__C__Ljava_lang_Character = (function(c) {
  return ScalaJS.modules.java_lang_Character().valueOf__C__Ljava_lang_Character(c)
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.boxToByte__B__Ljava_lang_Byte = (function(b) {
  return ScalaJS.modules.java_lang_Byte().valueOf__B__Ljava_lang_Byte(b)
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.boxToShort__S__Ljava_lang_Short = (function(s) {
  return ScalaJS.modules.java_lang_Short().valueOf__S__Ljava_lang_Short(s)
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.boxToInteger__I__Ljava_lang_Integer = (function(i) {
  return ScalaJS.modules.java_lang_Integer().valueOf__I__Ljava_lang_Integer(i)
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.boxToLong__J__Ljava_lang_Long = (function(l) {
  return ScalaJS.modules.java_lang_Long().valueOf__J__Ljava_lang_Long(l)
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.boxToFloat__F__Ljava_lang_Float = (function(f) {
  return ScalaJS.modules.java_lang_Float().valueOf__F__Ljava_lang_Float(f)
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.boxToDouble__D__Ljava_lang_Double = (function(d) {
  return ScalaJS.modules.java_lang_Double().valueOf__D__Ljava_lang_Double(d)
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.unboxToBoolean__O__Z = (function(b) {
  if ((b === null)) {
    return false
  } else {
    return ScalaJS.as.java_lang_Boolean(b).booleanValue__Z()
  }
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.unboxToChar__O__C = (function(c) {
  if ((c === null)) {
    return 0
  } else {
    return ScalaJS.as.java_lang_Character(c).charValue__C()
  }
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.unboxToByte__O__B = (function(b) {
  if ((b === null)) {
    return 0
  } else {
    return ScalaJS.as.java_lang_Byte(b).byteValue__B()
  }
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.unboxToShort__O__S = (function(s) {
  if ((s === null)) {
    return 0
  } else {
    return ScalaJS.as.java_lang_Short(s).shortValue__S()
  }
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.unboxToInt__O__I = (function(i) {
  if ((i === null)) {
    return 0
  } else {
    return ScalaJS.as.java_lang_Integer(i).intValue__I()
  }
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.unboxToLong__O__J = (function(l) {
  if ((l === null)) {
    return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0)
  } else {
    return ScalaJS.as.java_lang_Long(l).longValue__J()
  }
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.unboxToFloat__O__F = (function(f) {
  if ((f === null)) {
    return 0.0
  } else {
    return ScalaJS.as.java_lang_Float(f).floatValue__F()
  }
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.unboxToDouble__O__D = (function(d) {
  if ((d === null)) {
    return 0.0
  } else {
    return ScalaJS.as.java_lang_Double(d).doubleValue__D()
  }
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.equals__O__O__Z = (function(x, y) {
  if ((x === y)) {
    return true
  } else {
    return this.equals2__O__O__Z(x, y)
  }
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.equals2__O__O__Z = (function(x, y) {
  var x1 = x;
  if (ScalaJS.is.java_lang_Number(x1)) {
    var x2 = ScalaJS.as.java_lang_Number(x1);
    return this.equalsNumObject__Ljava_lang_Number__O__Z(x2, y)
  };
  if (ScalaJS.is.java_lang_Character(x1)) {
    var x3 = ScalaJS.as.java_lang_Character(x1);
    return this.equalsCharObject__Ljava_lang_Character__O__Z(x3, y)
  };
  if ((x1 === null)) {
    return (y === null)
  } else {
    return ScalaJS.objectEquals(x1, y)
  }
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.equalsNumObject__Ljava_lang_Number__O__Z = (function(xn, y) {
  var x1 = y;
  if (ScalaJS.is.java_lang_Number(x1)) {
    var x2 = ScalaJS.as.java_lang_Number(x1);
    return this.equalsNumNum__Ljava_lang_Number__Ljava_lang_Number__Z(xn, x2)
  };
  if (ScalaJS.is.java_lang_Character(x1)) {
    var x3 = ScalaJS.as.java_lang_Character(x1);
    return this.equalsNumChar__p1__Ljava_lang_Number__Ljava_lang_Character__Z(xn, x3)
  };
  if ((xn === null)) {
    return (x1 === null)
  } else {
    return ScalaJS.objectEquals(xn, x1)
  }
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.typeCode__p1__O__I = (function(a) {
  var x1 = a;
  if (ScalaJS.is.java_lang_Integer(x1)) {
    return ScalaJS.modules.scala_runtime_BoxesRunTime$Codes().INT__I()
  };
  if (ScalaJS.is.java_lang_Byte(x1)) {
    return ScalaJS.modules.scala_runtime_BoxesRunTime$Codes().BYTE__I()
  };
  if (ScalaJS.is.java_lang_Character(x1)) {
    return ScalaJS.modules.scala_runtime_BoxesRunTime$Codes().CHAR__I()
  };
  if (ScalaJS.is.java_lang_Long(x1)) {
    return ScalaJS.modules.scala_runtime_BoxesRunTime$Codes().LONG__I()
  };
  if (ScalaJS.is.java_lang_Double(x1)) {
    return ScalaJS.modules.scala_runtime_BoxesRunTime$Codes().DOUBLE__I()
  };
  if (ScalaJS.is.java_lang_Short(x1)) {
    return ScalaJS.modules.scala_runtime_BoxesRunTime$Codes().SHORT__I()
  };
  if (ScalaJS.is.java_lang_Float(x1)) {
    return ScalaJS.modules.scala_runtime_BoxesRunTime$Codes().FLOAT__I()
  };
  return ScalaJS.modules.scala_runtime_BoxesRunTime$Codes().OTHER__I()
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.eqTypeCode__p1__Ljava_lang_Number__I = (function(a) {
  var x1 = a;
  if (ScalaJS.is.java_lang_Integer(x1)) {
    return ScalaJS.modules.scala_runtime_BoxesRunTime$Codes().INT__I()
  };
  if (ScalaJS.is.java_lang_Byte(x1)) {
    return ScalaJS.modules.scala_runtime_BoxesRunTime$Codes().INT__I()
  };
  if (ScalaJS.is.java_lang_Long(x1)) {
    return ScalaJS.modules.scala_runtime_BoxesRunTime$Codes().LONG__I()
  };
  if (ScalaJS.is.java_lang_Double(x1)) {
    return ScalaJS.modules.scala_runtime_BoxesRunTime$Codes().DOUBLE__I()
  };
  if (ScalaJS.is.java_lang_Short(x1)) {
    return ScalaJS.modules.scala_runtime_BoxesRunTime$Codes().INT__I()
  };
  if (ScalaJS.is.java_lang_Float(x1)) {
    return ScalaJS.modules.scala_runtime_BoxesRunTime$Codes().FLOAT__I()
  };
  return ScalaJS.modules.scala_runtime_BoxesRunTime$Codes().OTHER__I()
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.equalsNumNum__Ljava_lang_Number__Ljava_lang_Number__Z = (function(xn, yn) {
  var xcode = this.eqTypeCode__p1__Ljava_lang_Number__I(xn);
  var ycode = this.eqTypeCode__p1__Ljava_lang_Number__I(yn);
  if ((ycode > xcode)) {
    var dcode = ycode
  } else {
    var dcode = xcode
  };
  var x1 = dcode;
  switch (x1) {
    default:
      if ((x1 === ScalaJS.modules.scala_runtime_BoxesRunTime$Codes().INT__I())) {
        return (xn.intValue__I() === yn.intValue__I())
      } else {
        if ((x1 === ScalaJS.modules.scala_runtime_BoxesRunTime$Codes().LONG__I())) {
          return xn.longValue__J().equals__O__Z(yn.longValue__J())
        } else {
          if ((x1 === ScalaJS.modules.scala_runtime_BoxesRunTime$Codes().FLOAT__I())) {
            return (xn.floatValue__F() === yn.floatValue__F())
          } else {
            if ((x1 === ScalaJS.modules.scala_runtime_BoxesRunTime$Codes().DOUBLE__I())) {
              return (xn.doubleValue__D() === yn.doubleValue__D())
            } else {
              if ((ScalaJS.is.scala_math_ScalaNumber(yn) && (!ScalaJS.is.scala_math_ScalaNumber(xn)))) {
                return ScalaJS.objectEquals(yn, xn)
              } else {
                if ((xn === null)) {
                  return (yn === null)
                } else {
                  return ScalaJS.objectEquals(xn, yn)
                }
              }
            }
          }
        }
      };
  }
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.equalsCharObject__Ljava_lang_Character__O__Z = (function(xc, y) {
  var x1 = y;
  if (ScalaJS.is.java_lang_Character(x1)) {
    var x2 = ScalaJS.as.java_lang_Character(x1);
    return (xc.charValue__C() === x2.charValue__C())
  };
  if (ScalaJS.is.java_lang_Number(x1)) {
    var x3 = ScalaJS.as.java_lang_Number(x1);
    return this.equalsNumChar__p1__Ljava_lang_Number__Ljava_lang_Character__Z(x3, xc)
  };
  if ((xc === null)) {
    return (y === null)
  } else {
    return xc.equals__O__Z(y)
  }
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.equalsNumChar__p1__Ljava_lang_Number__Ljava_lang_Character__Z = (function(xn, yc) {
  var ch = yc.charValue__C();
  var x1 = this.eqTypeCode__p1__Ljava_lang_Number__I(xn);
  switch (x1) {
    default:
      if ((x1 === ScalaJS.modules.scala_runtime_BoxesRunTime$Codes().INT__I())) {
        return (xn.intValue__I() === ch)
      } else {
        if ((x1 === ScalaJS.modules.scala_runtime_BoxesRunTime$Codes().LONG__I())) {
          return xn.longValue__J().equals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromChar__C__Lscala_scalajs_runtime_Long(ch))
        } else {
          if ((x1 === ScalaJS.modules.scala_runtime_BoxesRunTime$Codes().FLOAT__I())) {
            return (xn.floatValue__F() === ch)
          } else {
            if ((x1 === ScalaJS.modules.scala_runtime_BoxesRunTime$Codes().DOUBLE__I())) {
              return (xn.doubleValue__D() === ch)
            } else {
              if ((xn === null)) {
                return (yc === null)
              } else {
                return ScalaJS.objectEquals(xn, yc)
              }
            }
          }
        }
      };
  }
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.hashFromLong__Ljava_lang_Long__I = (function(n) {
  var iv = n.intValue__I();
  if (ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(iv).equals__O__Z(n.longValue__J())) {
    return iv
  } else {
    return n.hashCode__I()
  }
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.hashFromDouble__Ljava_lang_Double__I = (function(n) {
  var iv = n.intValue__I();
  var dv = n.doubleValue__D();
  var lv = n.longValue__J();
  if ((iv === dv)) {
    return iv
  } else {
    if ((lv.toDouble__D() === dv)) {
      return ScalaJS.modules.java_lang_Long().valueOf__J__Ljava_lang_Long(lv).hashCode__I()
    } else {
      return n.hashCode__I()
    }
  }
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.hashFromFloat__Ljava_lang_Float__I = (function(n) {
  var iv = n.intValue__I();
  var fv = n.floatValue__F();
  var lv = n.longValue__J();
  if ((iv === fv)) {
    return iv
  } else {
    if ((lv.toDouble__D() === fv)) {
      return ScalaJS.modules.java_lang_Long().valueOf__J__Ljava_lang_Long(lv).hashCode__I()
    } else {
      return n.hashCode__I()
    }
  }
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.hashFromNumber__Ljava_lang_Number__I = (function(n) {
  var x1 = n;
  if (ScalaJS.is.java_lang_Long(x1)) {
    var x2 = ScalaJS.as.java_lang_Long(x1);
    return this.hashFromLong__Ljava_lang_Long__I(x2)
  };
  if (ScalaJS.is.java_lang_Double(x1)) {
    var x3 = ScalaJS.as.java_lang_Double(x1);
    return this.hashFromDouble__Ljava_lang_Double__I(x3)
  };
  if (ScalaJS.is.java_lang_Float(x1)) {
    var x4 = ScalaJS.as.java_lang_Float(x1);
    return this.hashFromFloat__Ljava_lang_Float__I(x4)
  };
  return ScalaJS.objectHashCode(x1)
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.hashFromObject__O__I = (function(a) {
  var x1 = a;
  if (ScalaJS.is.java_lang_Number(x1)) {
    var x2 = ScalaJS.as.java_lang_Number(x1);
    return this.hashFromNumber__Ljava_lang_Number__I(x2)
  };
  return ScalaJS.objectHashCode(x1)
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.hashFromObject__O__ = (function(a) {
  return ScalaJS.bI(this.hashFromObject__O__I(a))
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.hashFromNumber__Ljava_lang_Number__ = (function(n) {
  return ScalaJS.bI(this.hashFromNumber__Ljava_lang_Number__I(n))
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.hashFromFloat__Ljava_lang_Float__ = (function(n$2) {
  return ScalaJS.bI(this.hashFromFloat__Ljava_lang_Float__I(n$2))
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.hashFromDouble__Ljava_lang_Double__ = (function(n$3) {
  return ScalaJS.bI(this.hashFromDouble__Ljava_lang_Double__I(n$3))
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.hashFromLong__Ljava_lang_Long__ = (function(n$4) {
  return ScalaJS.bI(this.hashFromLong__Ljava_lang_Long__I(n$4))
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.equalsCharObject__Ljava_lang_Character__O__ = (function(xc, y) {
  return ScalaJS.bZ(this.equalsCharObject__Ljava_lang_Character__O__Z(xc, y))
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.equalsNumNum__Ljava_lang_Number__Ljava_lang_Number__ = (function(xn, yn) {
  return ScalaJS.bZ(this.equalsNumNum__Ljava_lang_Number__Ljava_lang_Number__Z(xn, yn))
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.equalsNumObject__Ljava_lang_Number__O__ = (function(xn$2, y$2) {
  return ScalaJS.bZ(this.equalsNumObject__Ljava_lang_Number__O__Z(xn$2, y$2))
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.equals2__O__O__ = (function(x, y$3) {
  return ScalaJS.bZ(this.equals2__O__O__Z(x, y$3))
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.equals__O__O__ = (function(x$2, y$4) {
  return ScalaJS.bZ(this.equals__O__O__Z(x$2, y$4))
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.unboxToDouble__O__ = (function(d) {
  return ScalaJS.bD(this.unboxToDouble__O__D(d))
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.unboxToFloat__O__ = (function(f) {
  return ScalaJS.bF(this.unboxToFloat__O__F(f))
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.unboxToLong__O__ = (function(l) {
  return ScalaJS.bJ(this.unboxToLong__O__J(l))
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.unboxToInt__O__ = (function(i) {
  return ScalaJS.bI(this.unboxToInt__O__I(i))
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.unboxToShort__O__ = (function(s) {
  return ScalaJS.bS(this.unboxToShort__O__S(s))
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.unboxToByte__O__ = (function(b) {
  return ScalaJS.bB(this.unboxToByte__O__B(b))
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.unboxToChar__O__ = (function(c) {
  return ScalaJS.bC(this.unboxToChar__O__C(c))
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.unboxToBoolean__O__ = (function(b$2) {
  return ScalaJS.bZ(this.unboxToBoolean__O__Z(b$2))
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.boxToDouble__D__ = (function(d$2) {
  return this.boxToDouble__D__Ljava_lang_Double(d$2)
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.boxToFloat__F__ = (function(f$2) {
  return this.boxToFloat__F__Ljava_lang_Float(f$2)
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.boxToLong__J__ = (function(l$2) {
  return this.boxToLong__J__Ljava_lang_Long(l$2)
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.boxToInteger__I__ = (function(i$2) {
  return this.boxToInteger__I__Ljava_lang_Integer(i$2)
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.boxToShort__S__ = (function(s$2) {
  return this.boxToShort__S__Ljava_lang_Short(s$2)
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.boxToByte__B__ = (function(b$3) {
  return this.boxToByte__B__Ljava_lang_Byte(b$3)
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.boxToCharacter__C__ = (function(c$2) {
  return this.boxToCharacter__C__Ljava_lang_Character(c$2)
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.boxToBoolean__Z__ = (function(b$4) {
  return this.boxToBoolean__Z__Ljava_lang_Boolean(b$4)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_BoxesRunTime$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_BoxesRunTime$.prototype = ScalaJS.c.scala_runtime_BoxesRunTime$.prototype;
ScalaJS.is.scala_runtime_BoxesRunTime$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_BoxesRunTime$)))
});
ScalaJS.as.scala_runtime_BoxesRunTime$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_BoxesRunTime$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.BoxesRunTime")
  }
});
ScalaJS.isArrayOf.scala_runtime_BoxesRunTime$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_BoxesRunTime$)))
});
ScalaJS.asArrayOf.scala_runtime_BoxesRunTime$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_BoxesRunTime$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.BoxesRunTime;", depth)
  }
});
ScalaJS.data.scala_runtime_BoxesRunTime$ = new ScalaJS.ClassTypeData({
  scala_runtime_BoxesRunTime$: 0
}, false, "scala.runtime.BoxesRunTime$", ScalaJS.data.java_lang_Object, {
  scala_runtime_BoxesRunTime$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_BoxesRunTime$.prototype.$classData = ScalaJS.data.scala_runtime_BoxesRunTime$;
ScalaJS.moduleInstances.scala_runtime_BoxesRunTime = undefined;
ScalaJS.modules.scala_runtime_BoxesRunTime = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_BoxesRunTime)) {
    ScalaJS.moduleInstances.scala_runtime_BoxesRunTime = new ScalaJS.c.scala_runtime_BoxesRunTime$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_BoxesRunTime
});
//@ sourceMappingURL=BoxesRunTime$.js.map
