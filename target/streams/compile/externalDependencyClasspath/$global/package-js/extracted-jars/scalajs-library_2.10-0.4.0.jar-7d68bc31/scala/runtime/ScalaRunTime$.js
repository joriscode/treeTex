/** @constructor */
ScalaJS.c.scala_runtime_ScalaRunTime$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.tupleNames$1 = null
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.constructor = ScalaJS.c.scala_runtime_ScalaRunTime$;
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.isArray__O__Z = (function(x) {
  return this.isArray__O__I__Z(x, 1)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.isArray__O__I__Z = (function(x, atLevel) {
  return ((!ScalaJS.anyRefEqEq(x, null)) && this.isArrayClass__p1__Ljava_lang_Class__I__Z(ScalaJS.objectGetClass(x), atLevel))
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.isArrayClass__p1__Ljava_lang_Class__I__Z = (function(clazz, atLevel) {
  var _$this = this;
  tailCallLoop: while (true) {
    if (clazz.isArray__Z()) {
      if ((atLevel === 1)) {
        return true
      } else {
        var temp$clazz = clazz.getComponentType__Ljava_lang_Class();
        var temp$atLevel = (atLevel - 1);
        clazz = temp$clazz;
        atLevel = temp$atLevel;
        continue tailCallLoop
      }
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.isValueClass__Ljava_lang_Class__Z = (function(clazz) {
  return clazz.isPrimitive__Z()
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.isTuple__O__Z = (function(x) {
  return ((!ScalaJS.anyRefEqEq(x, null)) && this.tupleNames__p1__Lscala_collection_immutable_Set().apply__O__Z(ScalaJS.objectGetClass(x).getName__T()))
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.isAnyVal__O__Z = (function(x) {
  var x1 = x;
  matchEnd15: {
    if (ScalaJS.is.java_lang_Byte(x1)) {
      var jsx$1 = true;
      break matchEnd15
    };
    if (ScalaJS.is.java_lang_Short(x1)) {
      var jsx$1 = true;
      break matchEnd15
    };
    if (ScalaJS.is.java_lang_Character(x1)) {
      var jsx$1 = true;
      break matchEnd15
    };
    if (ScalaJS.is.java_lang_Integer(x1)) {
      var jsx$1 = true;
      break matchEnd15
    };
    if (ScalaJS.is.java_lang_Long(x1)) {
      var jsx$1 = true;
      break matchEnd15
    };
    if (ScalaJS.is.java_lang_Float(x1)) {
      var jsx$1 = true;
      break matchEnd15
    };
    if (ScalaJS.is.java_lang_Double(x1)) {
      var jsx$1 = true;
      break matchEnd15
    };
    if (ScalaJS.is.java_lang_Boolean(x1)) {
      var jsx$1 = true;
      break matchEnd15
    };
    if (ScalaJS.is.scala_runtime_BoxedUnit(x1)) {
      var jsx$1 = true;
      break matchEnd15
    };
    var jsx$1 = false;
    break matchEnd15
  };
  if (jsx$1) {
    return true
  };
  return false
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.tupleNames__p1__Lscala_collection_immutable_Set = (function() {
  return this.tupleNames$1
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.arrayClass__Ljava_lang_Class__Ljava_lang_Class = (function(clazz) {
  if (ScalaJS.anyRefEqEq(clazz, ScalaJS.modules.java_lang_Void().TYPE__Ljava_lang_Class())) {
    return ScalaJS.data.scala_runtime_BoxedUnit.getArrayOf().getClassOf()
  } else {
    return ScalaJS.objectGetClass(ScalaJS.modules.java_lang_reflect_Array().newInstance__Ljava_lang_Class__I__O(clazz, 0))
  }
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.arrayElementClass__O__Ljava_lang_Class = (function(schematic) {
  var x1 = schematic;
  if (ScalaJS.is.java_lang_Class(x1)) {
    var x2 = ScalaJS.as.java_lang_Class(x1);
    return x2.getComponentType__Ljava_lang_Class()
  };
  if (ScalaJS.is.scala_reflect_ClassTag(x1)) {
    var x3 = ScalaJS.as.scala_reflect_ClassTag(x1);
    return x3.runtimeClass__Ljava_lang_Class()
  };
  throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T(new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["unsupported schematic ", " (", ")"]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [schematic, ScalaJS.objectGetClass(schematic)]))))
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.anyValClass__O__Lscala_reflect_ClassTag__Ljava_lang_Class = (function(value, evidence$1) {
  return ScalaJS.modules.scala_reflect_package().classTag__Lscala_reflect_ClassTag__Lscala_reflect_ClassTag(evidence$1).runtimeClass__Ljava_lang_Class()
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.array$undapply__O__I__O = (function(xs, idx) {
  var x1 = xs;
  if (ScalaJS.isArrayOf.java_lang_Object(x1, 1)) {
    var x2 = ScalaJS.asArrayOf.java_lang_Object(x1, 1);
    return x2.underlying[idx]
  };
  if (ScalaJS.isArrayOf.scala_Int(x1, 1)) {
    var x3 = ScalaJS.asArrayOf.scala_Int(x1, 1);
    return ScalaJS.bI(x3.underlying[idx])
  };
  if (ScalaJS.isArrayOf.scala_Double(x1, 1)) {
    var x4 = ScalaJS.asArrayOf.scala_Double(x1, 1);
    return ScalaJS.bD(x4.underlying[idx])
  };
  if (ScalaJS.isArrayOf.scala_Long(x1, 1)) {
    var x5 = ScalaJS.asArrayOf.scala_Long(x1, 1);
    return ScalaJS.bJ(x5.underlying[idx])
  };
  if (ScalaJS.isArrayOf.scala_Float(x1, 1)) {
    var x6 = ScalaJS.asArrayOf.scala_Float(x1, 1);
    return ScalaJS.bF(x6.underlying[idx])
  };
  if (ScalaJS.isArrayOf.scala_Char(x1, 1)) {
    var x7 = ScalaJS.asArrayOf.scala_Char(x1, 1);
    return ScalaJS.bC(x7.underlying[idx])
  };
  if (ScalaJS.isArrayOf.scala_Byte(x1, 1)) {
    var x8 = ScalaJS.asArrayOf.scala_Byte(x1, 1);
    return ScalaJS.bB(x8.underlying[idx])
  };
  if (ScalaJS.isArrayOf.scala_Short(x1, 1)) {
    var x9 = ScalaJS.asArrayOf.scala_Short(x1, 1);
    return ScalaJS.bS(x9.underlying[idx])
  };
  if (ScalaJS.isArrayOf.scala_Boolean(x1, 1)) {
    var x10 = ScalaJS.asArrayOf.scala_Boolean(x1, 1);
    return ScalaJS.bZ(x10.underlying[idx])
  };
  if (ScalaJS.isArrayOf.scala_runtime_BoxedUnit(x1, 1)) {
    var x11 = ScalaJS.asArrayOf.scala_runtime_BoxedUnit(x1, 1);
    return x11.underlying[idx]
  };
  if (ScalaJS.anyRefEqEq(null, x1)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.array$undupdate__O__I__O__V = (function(xs, idx, value) {
  var x1 = xs;
  matchEnd14: {
    if (ScalaJS.isArrayOf.java_lang_Object(x1, 1)) {
      var x2 = ScalaJS.asArrayOf.java_lang_Object(x1, 1);
      x2.underlying[idx] = value;
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd14
    };
    if (ScalaJS.isArrayOf.scala_Int(x1, 1)) {
      var x3 = ScalaJS.asArrayOf.scala_Int(x1, 1);
      x3.underlying[idx] = ScalaJS.uI(value);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd14
    };
    if (ScalaJS.isArrayOf.scala_Double(x1, 1)) {
      var x4 = ScalaJS.asArrayOf.scala_Double(x1, 1);
      x4.underlying[idx] = ScalaJS.uD(value);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd14
    };
    if (ScalaJS.isArrayOf.scala_Long(x1, 1)) {
      var x5 = ScalaJS.asArrayOf.scala_Long(x1, 1);
      x5.underlying[idx] = ScalaJS.uJ(value);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd14
    };
    if (ScalaJS.isArrayOf.scala_Float(x1, 1)) {
      var x6 = ScalaJS.asArrayOf.scala_Float(x1, 1);
      x6.underlying[idx] = ScalaJS.uF(value);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd14
    };
    if (ScalaJS.isArrayOf.scala_Char(x1, 1)) {
      var x7 = ScalaJS.asArrayOf.scala_Char(x1, 1);
      x7.underlying[idx] = ScalaJS.uC(value);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd14
    };
    if (ScalaJS.isArrayOf.scala_Byte(x1, 1)) {
      var x8 = ScalaJS.asArrayOf.scala_Byte(x1, 1);
      x8.underlying[idx] = ScalaJS.uB(value);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd14
    };
    if (ScalaJS.isArrayOf.scala_Short(x1, 1)) {
      var x9 = ScalaJS.asArrayOf.scala_Short(x1, 1);
      x9.underlying[idx] = ScalaJS.uS(value);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd14
    };
    if (ScalaJS.isArrayOf.scala_Boolean(x1, 1)) {
      var x10 = ScalaJS.asArrayOf.scala_Boolean(x1, 1);
      x10.underlying[idx] = ScalaJS.uZ(value);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd14
    };
    if (ScalaJS.isArrayOf.scala_runtime_BoxedUnit(x1, 1)) {
      var x11 = ScalaJS.asArrayOf.scala_runtime_BoxedUnit(x1, 1);
      x11.underlying[idx] = ScalaJS.as.scala_runtime_BoxedUnit(value);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd14
    };
    if (ScalaJS.anyRefEqEq(null, x1)) {
      throw new ScalaJS.c.java_lang_NullPointerException().init___()
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  }
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.array$undlength__O__I = (function(xs) {
  var x1 = xs;
  if (ScalaJS.isArrayOf.java_lang_Object(x1, 1)) {
    var x2 = ScalaJS.asArrayOf.java_lang_Object(x1, 1);
    return x2.underlying.length
  };
  if (ScalaJS.isArrayOf.scala_Int(x1, 1)) {
    var x3 = ScalaJS.asArrayOf.scala_Int(x1, 1);
    return x3.underlying.length
  };
  if (ScalaJS.isArrayOf.scala_Double(x1, 1)) {
    var x4 = ScalaJS.asArrayOf.scala_Double(x1, 1);
    return x4.underlying.length
  };
  if (ScalaJS.isArrayOf.scala_Long(x1, 1)) {
    var x5 = ScalaJS.asArrayOf.scala_Long(x1, 1);
    return x5.underlying.length
  };
  if (ScalaJS.isArrayOf.scala_Float(x1, 1)) {
    var x6 = ScalaJS.asArrayOf.scala_Float(x1, 1);
    return x6.underlying.length
  };
  if (ScalaJS.isArrayOf.scala_Char(x1, 1)) {
    var x7 = ScalaJS.asArrayOf.scala_Char(x1, 1);
    return x7.underlying.length
  };
  if (ScalaJS.isArrayOf.scala_Byte(x1, 1)) {
    var x8 = ScalaJS.asArrayOf.scala_Byte(x1, 1);
    return x8.underlying.length
  };
  if (ScalaJS.isArrayOf.scala_Short(x1, 1)) {
    var x9 = ScalaJS.asArrayOf.scala_Short(x1, 1);
    return x9.underlying.length
  };
  if (ScalaJS.isArrayOf.scala_Boolean(x1, 1)) {
    var x10 = ScalaJS.asArrayOf.scala_Boolean(x1, 1);
    return x10.underlying.length
  };
  if (ScalaJS.isArrayOf.scala_runtime_BoxedUnit(x1, 1)) {
    var x11 = ScalaJS.asArrayOf.scala_runtime_BoxedUnit(x1, 1);
    return x11.underlying.length
  };
  if (ScalaJS.anyRefEqEq(null, x1)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.array$undclone__O__O = (function(xs) {
  var x1 = xs;
  if (ScalaJS.isArrayOf.java_lang_Object(x1, 1)) {
    var x2 = ScalaJS.asArrayOf.java_lang_Object(x1, 1);
    return ScalaJS.modules.scala_runtime_ArrayRuntime().cloneArray__AO__AO(x2)
  };
  if (ScalaJS.isArrayOf.scala_Int(x1, 1)) {
    var x3 = ScalaJS.asArrayOf.scala_Int(x1, 1);
    return ScalaJS.modules.scala_runtime_ArrayRuntime().cloneArray__AI__AI(x3)
  };
  if (ScalaJS.isArrayOf.scala_Double(x1, 1)) {
    var x4 = ScalaJS.asArrayOf.scala_Double(x1, 1);
    return ScalaJS.modules.scala_runtime_ArrayRuntime().cloneArray__AD__AD(x4)
  };
  if (ScalaJS.isArrayOf.scala_Long(x1, 1)) {
    var x5 = ScalaJS.asArrayOf.scala_Long(x1, 1);
    return ScalaJS.modules.scala_runtime_ArrayRuntime().cloneArray__AJ__AJ(x5)
  };
  if (ScalaJS.isArrayOf.scala_Float(x1, 1)) {
    var x6 = ScalaJS.asArrayOf.scala_Float(x1, 1);
    return ScalaJS.modules.scala_runtime_ArrayRuntime().cloneArray__AF__AF(x6)
  };
  if (ScalaJS.isArrayOf.scala_Char(x1, 1)) {
    var x7 = ScalaJS.asArrayOf.scala_Char(x1, 1);
    return ScalaJS.modules.scala_runtime_ArrayRuntime().cloneArray__AC__AC(x7)
  };
  if (ScalaJS.isArrayOf.scala_Byte(x1, 1)) {
    var x8 = ScalaJS.asArrayOf.scala_Byte(x1, 1);
    return ScalaJS.modules.scala_runtime_ArrayRuntime().cloneArray__AB__AB(x8)
  };
  if (ScalaJS.isArrayOf.scala_Short(x1, 1)) {
    var x9 = ScalaJS.asArrayOf.scala_Short(x1, 1);
    return ScalaJS.modules.scala_runtime_ArrayRuntime().cloneArray__AS__AS(x9)
  };
  if (ScalaJS.isArrayOf.scala_Boolean(x1, 1)) {
    var x10 = ScalaJS.asArrayOf.scala_Boolean(x1, 1);
    return ScalaJS.modules.scala_runtime_ArrayRuntime().cloneArray__AZ__AZ(x10)
  };
  if (ScalaJS.isArrayOf.scala_runtime_BoxedUnit(x1, 1)) {
    var x11 = ScalaJS.asArrayOf.scala_runtime_BoxedUnit(x1, 1);
    return x11
  };
  if (ScalaJS.anyRefEqEq(null, x1)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.toObjectArray__O__AO = (function(src) {
  var x1 = src;
  if (ScalaJS.isArrayOf.java_lang_Object(x1, 1)) {
    var x2 = ScalaJS.asArrayOf.java_lang_Object(x1, 1);
    return x2
  };
  var length = this.array$undlength__O__I(src);
  var dest = ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [length]);
  ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), length).foreach$mVc$sp__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(src$1, dest$1) {
    return (function(i) {
      i = ScalaJS.uI(i);
      ScalaJS.modules.scala_runtime_ScalaRunTime().array$undupdate__O__I__O__V(dest$1, i, ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(src$1, i));
      return ScalaJS.bV(undefined)
    })
  })(src, dest)));
  return dest
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.toArray__Lscala_collection_Seq__AO = (function(xs) {
  var arr = ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [xs.length__I()]);
  var i = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  xs.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arr$1, i$1) {
    return (function(x) {
      arr$1.underlying[i$1.elem$1] = x;
      i$1.elem$1 = (i$1.elem$1 + 1);
      return ScalaJS.bV(undefined)
    })
  })(arr, i)));
  return arr
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.ensureAccessible__Ljava_lang_reflect_Method__Ljava_lang_reflect_Method = (function(m) {
  if ((!m.isAccessible__Z())) {
    try {
      m.setAccessible__Z__V(true)
    } catch ($jsexc$) {
      if (ScalaJS.is.java_lang_SecurityException($jsexc$)) {
        /*<skip>*/
      } else {
        throw $jsexc$
      }
    }
  };
  return m
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.checkInitialized__O__O = (function(x) {
  if (ScalaJS.anyRefEqEq(x, null)) {
    throw new ScalaJS.c.scala_UninitializedError().init___()
  } else {
    return x
  }
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.$$undtoString__Lscala_Product__T = (function(x) {
  return x.productIterator__Lscala_collection_Iterator().mkString__T__T__T__T((("" + x.productPrefix__T()) + "("), ",", ")")
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.$$undhashCode__Lscala_Product__I = (function(x) {
  return ScalaJS.modules.scala_util_hashing_MurmurHash3().productHash__Lscala_Product__I(x)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.typedProductIterator__Lscala_Product__Lscala_collection_Iterator = (function(x) {
  return new ScalaJS.c.scala_runtime_ScalaRunTime$$anon$1().init___Lscala_Product(x)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.inlinedEquals__O__O__Z = (function(x, y) {
  if ((x === y)) {
    return true
  } else {
    if ((x === null)) {
      return false
    } else {
      if (ScalaJS.is.java_lang_Number(x)) {
        return ScalaJS.modules.scala_runtime_BoxesRunTime().equalsNumObject__Ljava_lang_Number__O__Z(ScalaJS.as.java_lang_Number(x), y)
      } else {
        if (ScalaJS.is.java_lang_Character(x)) {
          return ScalaJS.modules.scala_runtime_BoxesRunTime().equalsCharObject__Ljava_lang_Character__O__Z(ScalaJS.as.java_lang_Character(x), y)
        } else {
          return ScalaJS.objectEquals(x, y)
        }
      }
    }
  }
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.$$undequals__Lscala_Product__O__Z = (function(x, y) {
  var x1 = y;
  if (ScalaJS.is.scala_Product(x1)) {
    var x2 = ScalaJS.as.scala_Product(x1);
    if ((x.productArity__I() === x2.productArity__I())) {
      return x.productIterator__Lscala_collection_Iterator().sameElements__Lscala_collection_Iterator__Z(x2.productIterator__Lscala_collection_Iterator())
    }
  };
  return false
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.hash__O__I = (function(x) {
  if (ScalaJS.anyRefEqEq(x, null)) {
    return 0
  } else {
    if (ScalaJS.is.java_lang_Number(x)) {
      return ScalaJS.modules.scala_runtime_BoxesRunTime().hashFromNumber__Ljava_lang_Number__I(ScalaJS.as.java_lang_Number(x))
    } else {
      return ScalaJS.objectHashCode(x)
    }
  }
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.hash__D__I = (function(dv) {
  var iv = (dv | 0);
  if ((iv === dv)) {
    return iv
  };
  var lv = ScalaJS.modules.scala_scalajs_runtime_Long().fromDouble__D__Lscala_scalajs_runtime_Long(dv);
  if ((lv.toDouble__D() === dv)) {
    return ScalaJS.objectHashCode(ScalaJS.bJ(lv))
  };
  var fv = dv;
  if ((fv === dv)) {
    return ScalaJS.objectHashCode(ScalaJS.bF(fv))
  } else {
    return ScalaJS.objectHashCode(ScalaJS.bD(dv))
  }
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.hash__F__I = (function(fv) {
  var iv = (fv | 0);
  if ((iv === fv)) {
    return iv
  };
  var lv = ScalaJS.modules.scala_scalajs_runtime_Long().fromFloat__F__Lscala_scalajs_runtime_Long(fv);
  if ((lv.toDouble__D() === fv)) {
    return this.hash__J__I(lv)
  } else {
    return ScalaJS.objectHashCode(ScalaJS.bF(fv))
  }
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.hash__J__I = (function(lv) {
  var low = lv.toInt__I();
  var lowSign = (low >>> 31);
  var high = lv.$$greater$greater$greater__I__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(32)).toInt__I();
  return (low ^ (high + lowSign))
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.hash__Ljava_lang_Number__I = (function(x) {
  return ScalaJS.modules.scala_runtime_BoxesRunTime().hashFromNumber__Ljava_lang_Number__I(x)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.hash__I__I = (function(x) {
  return x
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.hash__S__I = (function(x) {
  return x
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.hash__B__I = (function(x) {
  return x
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.hash__C__I = (function(x) {
  return x
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.hash__Z__I = (function(x) {
  if (x) {
    return ScalaJS.objectHashCode(ScalaJS.bZ(true))
  } else {
    return ScalaJS.objectHashCode(ScalaJS.bZ(false))
  }
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.hash__Lscala_runtime_BoxedUnit__I = (function(x) {
  return 0
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.sameElements__Lscala_collection_Seq__Lscala_collection_Seq__Z = (function(xs1, xs2) {
  return xs1.sameElements__Lscala_collection_GenIterable__Z(xs2)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.stringOf__O__T = (function(arg) {
  return this.stringOf__O__I__T(arg, 2147483647)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.stringOf__O__I__T = (function(arg, maxElements) {
  try {
    return this.scala$runtime$ScalaRunTime$$inner$1__O__I__T(arg, maxElements)
  } catch ($jsexc$) {
    $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
    var ex10 = $jsexc$;
    var x6 = ex10;
    matchEnd15: {
      if (ScalaJS.is.java_lang_StackOverflowError(x6)) {
        var jsx$2 = true;
        break matchEnd15
      };
      if (ScalaJS.is.java_lang_UnsupportedOperationException(x6)) {
        var jsx$2 = true;
        break matchEnd15
      };
      if (ScalaJS.is.java_lang_AssertionError(x6)) {
        var jsx$2 = true;
        break matchEnd15
      };
      var jsx$2 = false;
      break matchEnd15
    };
    if (jsx$2) {
      return ("" + arg)
    };
    throw ScalaJS.unwrapJavaScriptException(ex10)
  }
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.replStringOf__O__I__T = (function(arg, maxElements) {
  var s = this.stringOf__O__I__T(arg, maxElements);
  if (ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__contains__Lscala_scalajs_runtime_RuntimeString__Ljava_lang_CharSequence__Z(s, "\n")) {
    var nl = "\n"
  } else {
    var nl = ""
  };
  return ((("" + nl) + s) + "\n")
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.checkZip__T__Lscala_collection_TraversableOnce__Lscala_collection_TraversableOnce__V = (function(what, coll1, coll2) {
  if (ScalaJS.modules.scala_sys_package().props__Lscala_sys_SystemProperties().contains__T__Z("scala.debug.zip")) {
    var xs = coll1.toIndexedSeq__Lscala_collection_immutable_IndexedSeq();
    var ys = coll2.toIndexedSeq__Lscala_collection_immutable_IndexedSeq();
    if ((xs.length__I() !== ys.length__I())) {
      ScalaJS.modules.scala_Console().err__Ljava_io_PrintStream().println__T__V(((((((("Mismatched zip in " + what) + ":\n") + "  this: ") + xs.mkString__T__T(", ")) + "\n") + "  that: ") + ys.mkString__T__T(", ")));
      ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(new ScalaJS.c.java_lang_Exception().init___().getStackTrace__ALjava_lang_StackTraceElement(), 1)).drop__I__O(2), 1)).take__I__O(10), 1)).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
        return (function(x) {
          ScalaJS.modules.scala_Predef().println__O__V(x);
          return ScalaJS.bV(undefined)
        })
      })()))
    }
  }
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.packageOf$1__p1__O__T = (function(x) {
  var x1 = ScalaJS.objectGetClass(x).getPackage__Ljava_lang_Package();
  if (ScalaJS.anyRefEqEq(null, x1)) {
    return ""
  };
  return x1.getName__T()
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.isScalaClass$1__p1__O__Z = (function(x) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__startsWith__Lscala_scalajs_runtime_RuntimeString__T__Z(this.packageOf$1__p1__O__T(x), "scala.")
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.isScalaCompilerClass$1__p1__O__Z = (function(x) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__startsWith__Lscala_scalajs_runtime_RuntimeString__T__Z(this.packageOf$1__p1__O__T(x), "scala.tools.nsc.")
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.useOwnToString$1__p1__O__Z = (function(x) {
  var x1 = x;
  matchEnd14: {
    if (ScalaJS.is.scala_xml_Node(x1)) {
      var jsx$3 = true;
      break matchEnd14
    };
    if (ScalaJS.is.scala_xml_MetaData(x1)) {
      var jsx$3 = true;
      break matchEnd14
    };
    var jsx$3 = false;
    break matchEnd14
  };
  if (jsx$3) {
    return true
  };
  matchEnd19: {
    if (ScalaJS.is.scala_collection_immutable_Range(x1)) {
      var jsx$4 = true;
      break matchEnd19
    };
    if (ScalaJS.is.scala_collection_immutable_NumericRange(x1)) {
      var jsx$4 = true;
      break matchEnd19
    };
    var jsx$4 = false;
    break matchEnd19
  };
  if (jsx$4) {
    return true
  };
  if (ScalaJS.is.scala_collection_generic_Sorted(x1)) {
    return true
  };
  if (ScalaJS.is.scala_collection_immutable_StringLike(x1)) {
    return true
  };
  if (ScalaJS.is.scala_collection_TraversableView(x1)) {
    return true
  };
  if (ScalaJS.is.scala_collection_Traversable(x1)) {
    var x9 = ScalaJS.as.scala_collection_Traversable(x1);
    return (((!x9.hasDefiniteSize__Z()) || (!this.isScalaClass$1__p1__O__Z(x9))) || this.isScalaCompilerClass$1__p1__O__Z(x9))
  };
  return false
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.scala$runtime$ScalaRunTime$$mapInner$1__O__I__T = (function(arg, maxElements$1) {
  var x1 = arg;
  if (ScalaJS.is.scala_Tuple2(x1)) {
    var x2 = ScalaJS.as.scala_Tuple2(x1);
    var k = x2.$$und1__O();
    var v = x2.$$und2__O();
    return ((("" + this.scala$runtime$ScalaRunTime$$inner$1__O__I__T(k, maxElements$1)) + " -> ") + this.scala$runtime$ScalaRunTime$$inner$1__O__I__T(v, maxElements$1))
  };
  return this.scala$runtime$ScalaRunTime$$inner$1__O__I__T(arg, maxElements$1)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.arrayToString$1__p1__O__I__T = (function(x, maxElements$1) {
  if (ScalaJS.anyRefEqEq(ScalaJS.objectGetClass(x).getComponentType__Ljava_lang_Class(), ScalaJS.data.scala_runtime_BoxedUnit.getClassOf())) {
    return ScalaJS.as.scala_collection_TraversableOnce(ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(this.array$undlength__O__I(x)), maxElements$1)).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
      return (function(x$1) {
        x$1 = ScalaJS.uI(x$1);
        return "()"
      })
    })()), ScalaJS.modules.scala_collection_immutable_IndexedSeq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).mkString__T__T__T__T("Array(", ", ", ")")
  } else {
    return ScalaJS.as.scala_collection_TraversableOnce(ScalaJS.as.scala_collection_TraversableLike(ScalaJS.modules.scala_collection_mutable_WrappedArray().make__O__Lscala_collection_mutable_WrappedArray(x).take__I__O(maxElements$1)).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(maxElements$1) {
      return (function(arg) {
        return ScalaJS.modules.scala_runtime_ScalaRunTime().scala$runtime$ScalaRunTime$$inner$1__O__I__T(arg, maxElements$1)
      })
    })(maxElements$1)), ScalaJS.modules.scala_collection_mutable_WrappedArray().canBuildFrom__Lscala_reflect_ClassTag__Lscala_collection_generic_CanBuildFrom(ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.java_lang_String.getClassOf())))).mkString__T__T__T__T("Array(", ", ", ")")
  }
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.scala$runtime$ScalaRunTime$$inner$1__O__I__T = (function(arg, maxElements$1) {
  var x1 = arg;
  if (ScalaJS.anyRefEqEq(null, x1)) {
    return "null"
  };
  if (ScalaJS.anyRefEqEq("", x1)) {
    return "\"\""
  };
  if (ScalaJS.is.java_lang_String(x1)) {
    var x4 = ScalaJS.as.java_lang_String(x1);
    if ((ScalaJS.modules.scala_runtime_RichChar().isWhitespace$extension__C__Z(ScalaJS.modules.scala_Predef().charWrapper__C__C(ScalaJS.uC(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(x4)).head__O()))) || ScalaJS.modules.scala_runtime_RichChar().isWhitespace$extension__C__Z(ScalaJS.modules.scala_Predef().charWrapper__C__C(ScalaJS.uC(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(x4)).last__O()))))) {
      return (("\"" + x4) + "\"")
    } else {
      return x4
    }
  };
  if (this.useOwnToString$1__p1__O__Z(x1)) {
    return ScalaJS.objectToString(x1)
  };
  if (ScalaJS.is.java_lang_Object(x1)) {
    var x5 = x1;
    if (this.isArray__O__Z(x5)) {
      return this.arrayToString$1__p1__O__I__T(x5, maxElements$1)
    }
  };
  if (ScalaJS.is.scala_collection_Map(x1)) {
    var x6 = ScalaJS.as.scala_collection_Map(x1);
    return x6.iterator__Lscala_collection_Iterator().take__I__Lscala_collection_Iterator(maxElements$1).map__Lscala_Function1__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(maxElements$1) {
      return (function(arg) {
        return ScalaJS.modules.scala_runtime_ScalaRunTime().scala$runtime$ScalaRunTime$$mapInner$1__O__I__T(arg, maxElements$1)
      })
    })(maxElements$1))).mkString__T__T__T__T((("" + x6.stringPrefix__T()) + "("), ", ", ")")
  };
  if (ScalaJS.is.scala_collection_Iterable(x1)) {
    var x7 = ScalaJS.as.scala_collection_Iterable(x1);
    return x7.iterator__Lscala_collection_Iterator().take__I__Lscala_collection_Iterator(maxElements$1).map__Lscala_Function1__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(maxElements$1) {
      return (function(arg) {
        return ScalaJS.modules.scala_runtime_ScalaRunTime().scala$runtime$ScalaRunTime$$inner$1__O__I__T(arg, maxElements$1)
      })
    })(maxElements$1))).mkString__T__T__T__T((("" + x7.stringPrefix__T()) + "("), ", ", ")")
  };
  if (ScalaJS.is.scala_collection_Traversable(x1)) {
    var x8 = ScalaJS.as.scala_collection_Traversable(x1);
    return ScalaJS.as.scala_collection_TraversableOnce(ScalaJS.as.scala_collection_TraversableLike(x8.take__I__O(maxElements$1)).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(maxElements$1) {
      return (function(arg) {
        return ScalaJS.modules.scala_runtime_ScalaRunTime().scala$runtime$ScalaRunTime$$inner$1__O__I__T(arg, maxElements$1)
      })
    })(maxElements$1)), ScalaJS.modules.scala_collection_Traversable().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).mkString__T__T__T__T((("" + x8.stringPrefix__T()) + "("), ", ", ")")
  };
  if (ScalaJS.is.scala_Product1(x1)) {
    var x9 = ScalaJS.as.scala_Product1(x1);
    if (this.isTuple__O__Z(x9)) {
      return (("(" + this.scala$runtime$ScalaRunTime$$inner$1__O__I__T(x9.$$und1__O(), maxElements$1)) + ",)")
    }
  };
  if (ScalaJS.is.scala_Product(x1)) {
    var x10 = ScalaJS.as.scala_Product(x1);
    if (this.isTuple__O__Z(x10)) {
      return x10.productIterator__Lscala_collection_Iterator().map__Lscala_Function1__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(maxElements$1) {
        return (function(arg) {
          return ScalaJS.modules.scala_runtime_ScalaRunTime().scala$runtime$ScalaRunTime$$inner$1__O__I__T(arg, maxElements$1)
        })
      })(maxElements$1))).mkString__T__T__T__T("(", ",", ")")
    }
  };
  return ScalaJS.objectToString(x1)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_runtime_ScalaRunTime = this;
  var i = 22;
  var names = ScalaJS.modules.scala_collection_immutable_Nil();
  while ((i >= 1)) {
    names = names.$$colon$colon__O__Lscala_collection_immutable_List(("scala.Tuple" + ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__I__T(i)));
    i = (i - 1)
  };
  var jsx$5 = names.toSet__Lscala_collection_immutable_Set();
  this.tupleNames$1 = jsx$5;
  return this
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.scala$runtime$ScalaRunTime$$inner$1__O__I__ = (function(arg, maxElements$1) {
  return this.scala$runtime$ScalaRunTime$$inner$1__O__I__T(arg, maxElements$1)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.scala$runtime$ScalaRunTime$$mapInner$1__O__I__ = (function(arg$2, maxElements$1$2) {
  return this.scala$runtime$ScalaRunTime$$mapInner$1__O__I__T(arg$2, maxElements$1$2)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.checkZip__T__Lscala_collection_TraversableOnce__Lscala_collection_TraversableOnce__ = (function(what, coll1, coll2) {
  return ScalaJS.bV(this.checkZip__T__Lscala_collection_TraversableOnce__Lscala_collection_TraversableOnce__V(what, coll1, coll2))
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.replStringOf__O__I__ = (function(arg$3, maxElements) {
  return this.replStringOf__O__I__T(arg$3, maxElements)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.stringOf__O__I__ = (function(arg$4, maxElements$2) {
  return this.stringOf__O__I__T(arg$4, maxElements$2)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.stringOf__O__ = (function(arg$5) {
  return this.stringOf__O__T(arg$5)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.sameElements__Lscala_collection_Seq__Lscala_collection_Seq__ = (function(xs1, xs2) {
  return ScalaJS.bZ(this.sameElements__Lscala_collection_Seq__Lscala_collection_Seq__Z(xs1, xs2))
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.hash__Lscala_runtime_BoxedUnit__ = (function(x) {
  return ScalaJS.bI(this.hash__Lscala_runtime_BoxedUnit__I(x))
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.hash__Z__ = (function(x$2) {
  return ScalaJS.bI(this.hash__Z__I(x$2))
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.hash__C__ = (function(x$3) {
  return ScalaJS.bI(this.hash__C__I(x$3))
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.hash__B__ = (function(x$4) {
  return ScalaJS.bI(this.hash__B__I(x$4))
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.hash__S__ = (function(x$5) {
  return ScalaJS.bI(this.hash__S__I(x$5))
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.hash__I__ = (function(x$6) {
  return ScalaJS.bI(this.hash__I__I(x$6))
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.hash__Ljava_lang_Number__ = (function(x$7) {
  return ScalaJS.bI(this.hash__Ljava_lang_Number__I(x$7))
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.hash__J__ = (function(lv) {
  return ScalaJS.bI(this.hash__J__I(lv))
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.hash__F__ = (function(fv) {
  return ScalaJS.bI(this.hash__F__I(fv))
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.hash__D__ = (function(dv) {
  return ScalaJS.bI(this.hash__D__I(dv))
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.hash__O__ = (function(x$8) {
  return ScalaJS.bI(this.hash__O__I(x$8))
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.$$undequals__Lscala_Product__O__ = (function(x$9, y) {
  return ScalaJS.bZ(this.$$undequals__Lscala_Product__O__Z(x$9, y))
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.inlinedEquals__O__O__ = (function(x$10, y$2) {
  return ScalaJS.bZ(this.inlinedEquals__O__O__Z(x$10, y$2))
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.typedProductIterator__Lscala_Product__ = (function(x$11) {
  return this.typedProductIterator__Lscala_Product__Lscala_collection_Iterator(x$11)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.$$undhashCode__Lscala_Product__ = (function(x$12) {
  return ScalaJS.bI(this.$$undhashCode__Lscala_Product__I(x$12))
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.$$undtoString__Lscala_Product__ = (function(x$13) {
  return this.$$undtoString__Lscala_Product__T(x$13)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.checkInitialized__O__ = (function(x$14) {
  return this.checkInitialized__O__O(x$14)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.ensureAccessible__Ljava_lang_reflect_Method__ = (function(m) {
  return this.ensureAccessible__Ljava_lang_reflect_Method__Ljava_lang_reflect_Method(m)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.toArray__Lscala_collection_Seq__ = (function(xs) {
  return this.toArray__Lscala_collection_Seq__AO(xs)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.toObjectArray__O__ = (function(src) {
  return this.toObjectArray__O__AO(src)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.array$undclone__O__ = (function(xs$2) {
  return this.array$undclone__O__O(xs$2)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.array$undlength__O__ = (function(xs$3) {
  return ScalaJS.bI(this.array$undlength__O__I(xs$3))
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.array$undupdate__O__I__O__ = (function(xs$4, idx, value) {
  return ScalaJS.bV(this.array$undupdate__O__I__O__V(xs$4, idx, value))
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.array$undapply__O__I__ = (function(xs$5, idx$2) {
  return this.array$undapply__O__I__O(xs$5, idx$2)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.anyValClass__O__Lscala_reflect_ClassTag__ = (function(value$2, evidence$1) {
  return this.anyValClass__O__Lscala_reflect_ClassTag__Ljava_lang_Class(value$2, evidence$1)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.arrayElementClass__O__ = (function(schematic) {
  return this.arrayElementClass__O__Ljava_lang_Class(schematic)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.arrayClass__Ljava_lang_Class__ = (function(clazz) {
  return this.arrayClass__Ljava_lang_Class__Ljava_lang_Class(clazz)
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.isAnyVal__O__ = (function(x$15) {
  return ScalaJS.bZ(this.isAnyVal__O__Z(x$15))
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.isTuple__O__ = (function(x$16) {
  return ScalaJS.bZ(this.isTuple__O__Z(x$16))
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.isValueClass__Ljava_lang_Class__ = (function(clazz$2) {
  return ScalaJS.bZ(this.isValueClass__Ljava_lang_Class__Z(clazz$2))
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.isArray__O__I__ = (function(x$17, atLevel) {
  return ScalaJS.bZ(this.isArray__O__I__Z(x$17, atLevel))
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.isArray__O__ = (function(x$18) {
  return ScalaJS.bZ(this.isArray__O__Z(x$18))
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_ScalaRunTime$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_ScalaRunTime$.prototype = ScalaJS.c.scala_runtime_ScalaRunTime$.prototype;
ScalaJS.is.scala_runtime_ScalaRunTime$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_ScalaRunTime$)))
});
ScalaJS.as.scala_runtime_ScalaRunTime$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_ScalaRunTime$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.ScalaRunTime")
  }
});
ScalaJS.isArrayOf.scala_runtime_ScalaRunTime$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_ScalaRunTime$)))
});
ScalaJS.asArrayOf.scala_runtime_ScalaRunTime$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_ScalaRunTime$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.ScalaRunTime;", depth)
  }
});
ScalaJS.data.scala_runtime_ScalaRunTime$ = new ScalaJS.ClassTypeData({
  scala_runtime_ScalaRunTime$: 0
}, false, "scala.runtime.ScalaRunTime$", ScalaJS.data.java_lang_Object, {
  scala_runtime_ScalaRunTime$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_ScalaRunTime$.prototype.$classData = ScalaJS.data.scala_runtime_ScalaRunTime$;
ScalaJS.moduleInstances.scala_runtime_ScalaRunTime = undefined;
ScalaJS.modules.scala_runtime_ScalaRunTime = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_ScalaRunTime)) {
    ScalaJS.moduleInstances.scala_runtime_ScalaRunTime = new ScalaJS.c.scala_runtime_ScalaRunTime$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_ScalaRunTime
});
//@ sourceMappingURL=ScalaRunTime$.js.map
