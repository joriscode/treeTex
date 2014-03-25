/** @constructor */
ScalaJS.c.scala_LowPriorityImplicits = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_LowPriorityImplicits.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_LowPriorityImplicits.prototype.constructor = ScalaJS.c.scala_LowPriorityImplicits;
ScalaJS.c.scala_LowPriorityImplicits.prototype.byteWrapper__B__B = (function(x) {
  return x
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.shortWrapper__S__S = (function(x) {
  return x
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.intWrapper__I__I = (function(x) {
  return x
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.charWrapper__C__C = (function(c) {
  return c
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.longWrapper__J__J = (function(x) {
  return x
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.floatWrapper__F__F = (function(x) {
  return x
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.doubleWrapper__D__D = (function(x) {
  return x
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.booleanWrapper__Z__Z = (function(x) {
  return x
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.Byte2byteNullConflict__Lscala_Null__B = (function(x) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("value error")
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.Short2shortNullConflict__Lscala_Null__S = (function(x) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("value error")
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.Character2charNullConflict__Lscala_Null__C = (function(x) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("value error")
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.Integer2intNullConflict__Lscala_Null__I = (function(x) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("value error")
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.Long2longNullConflict__Lscala_Null__J = (function(x) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("value error")
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.Float2floatNullConflict__Lscala_Null__F = (function(x) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("value error")
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.Double2doubleNullConflict__Lscala_Null__D = (function(x) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("value error")
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.Boolean2booleanNullConflict__Lscala_Null__Z = (function(x) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("value error")
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.genericWrapArray__O__Lscala_collection_mutable_WrappedArray = (function(xs) {
  if ((xs === null)) {
    return null
  } else {
    return ScalaJS.modules.scala_collection_mutable_WrappedArray().make__O__Lscala_collection_mutable_WrappedArray(xs)
  }
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.wrapRefArray__AO__Lscala_collection_mutable_WrappedArray = (function(xs) {
  if ((xs === null)) {
    return null
  } else {
    if ((xs.underlying.length === 0)) {
      return ScalaJS.modules.scala_collection_mutable_WrappedArray().empty__Lscala_collection_mutable_WrappedArray()
    } else {
      return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofRef().init___AO(xs)
    }
  }
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.wrapIntArray__AI__Lscala_collection_mutable_WrappedArray = (function(xs) {
  if ((xs !== null)) {
    return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofInt().init___AI(xs)
  } else {
    return null
  }
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.wrapDoubleArray__AD__Lscala_collection_mutable_WrappedArray = (function(xs) {
  if ((xs !== null)) {
    return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofDouble().init___AD(xs)
  } else {
    return null
  }
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.wrapLongArray__AJ__Lscala_collection_mutable_WrappedArray = (function(xs) {
  if ((xs !== null)) {
    return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofLong().init___AJ(xs)
  } else {
    return null
  }
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.wrapFloatArray__AF__Lscala_collection_mutable_WrappedArray = (function(xs) {
  if ((xs !== null)) {
    return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofFloat().init___AF(xs)
  } else {
    return null
  }
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.wrapCharArray__AC__Lscala_collection_mutable_WrappedArray = (function(xs) {
  if ((xs !== null)) {
    return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofChar().init___AC(xs)
  } else {
    return null
  }
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.wrapByteArray__AB__Lscala_collection_mutable_WrappedArray = (function(xs) {
  if ((xs !== null)) {
    return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofByte().init___AB(xs)
  } else {
    return null
  }
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.wrapShortArray__AS__Lscala_collection_mutable_WrappedArray = (function(xs) {
  if ((xs !== null)) {
    return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofShort().init___AS(xs)
  } else {
    return null
  }
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.wrapBooleanArray__AZ__Lscala_collection_mutable_WrappedArray = (function(xs) {
  if ((xs !== null)) {
    return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofBoolean().init___AZ(xs)
  } else {
    return null
  }
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.wrapUnitArray__ALscala_runtime_BoxedUnit__Lscala_collection_mutable_WrappedArray = (function(xs) {
  if ((xs !== null)) {
    return new ScalaJS.c.scala_collection_mutable_WrappedArray$ofUnit().init___ALscala_runtime_BoxedUnit(xs)
  } else {
    return null
  }
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.wrapString__T__Lscala_collection_immutable_WrappedString = (function(s) {
  if ((s !== null)) {
    return new ScalaJS.c.scala_collection_immutable_WrappedString().init___T(s)
  } else {
    return null
  }
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.unwrapString__Lscala_collection_immutable_WrappedString__T = (function(ws) {
  if ((ws !== null)) {
    return ws.self__T()
  } else {
    return null
  }
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.fallbackStringCanBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return new ScalaJS.c.scala_LowPriorityImplicits$$anon$1().init___Lscala_LowPriorityImplicits(this)
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.fallbackStringCanBuildFrom__ = (function() {
  return this.fallbackStringCanBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.unwrapString__Lscala_collection_immutable_WrappedString__ = (function(ws) {
  return this.unwrapString__Lscala_collection_immutable_WrappedString__T(ws)
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.wrapString__T__ = (function(s) {
  return this.wrapString__T__Lscala_collection_immutable_WrappedString(s)
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.wrapUnitArray__ALscala_runtime_BoxedUnit__ = (function(xs) {
  return this.wrapUnitArray__ALscala_runtime_BoxedUnit__Lscala_collection_mutable_WrappedArray(xs)
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.wrapBooleanArray__AZ__ = (function(xs$2) {
  return this.wrapBooleanArray__AZ__Lscala_collection_mutable_WrappedArray(xs$2)
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.wrapShortArray__AS__ = (function(xs$3) {
  return this.wrapShortArray__AS__Lscala_collection_mutable_WrappedArray(xs$3)
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.wrapByteArray__AB__ = (function(xs$4) {
  return this.wrapByteArray__AB__Lscala_collection_mutable_WrappedArray(xs$4)
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.wrapCharArray__AC__ = (function(xs$5) {
  return this.wrapCharArray__AC__Lscala_collection_mutable_WrappedArray(xs$5)
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.wrapFloatArray__AF__ = (function(xs$6) {
  return this.wrapFloatArray__AF__Lscala_collection_mutable_WrappedArray(xs$6)
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.wrapLongArray__AJ__ = (function(xs$7) {
  return this.wrapLongArray__AJ__Lscala_collection_mutable_WrappedArray(xs$7)
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.wrapDoubleArray__AD__ = (function(xs$8) {
  return this.wrapDoubleArray__AD__Lscala_collection_mutable_WrappedArray(xs$8)
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.wrapIntArray__AI__ = (function(xs$9) {
  return this.wrapIntArray__AI__Lscala_collection_mutable_WrappedArray(xs$9)
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.wrapRefArray__AO__ = (function(xs$10) {
  return this.wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(xs$10)
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.genericWrapArray__O__ = (function(xs$11) {
  return this.genericWrapArray__O__Lscala_collection_mutable_WrappedArray(xs$11)
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.Boolean2booleanNullConflict__Lscala_Null__ = (function(x) {
  return ScalaJS.bZ(this.Boolean2booleanNullConflict__Lscala_Null__Z(x))
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.Double2doubleNullConflict__Lscala_Null__ = (function(x$2) {
  return ScalaJS.bD(this.Double2doubleNullConflict__Lscala_Null__D(x$2))
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.Float2floatNullConflict__Lscala_Null__ = (function(x$3) {
  return ScalaJS.bF(this.Float2floatNullConflict__Lscala_Null__F(x$3))
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.Long2longNullConflict__Lscala_Null__ = (function(x$4) {
  return ScalaJS.bJ(this.Long2longNullConflict__Lscala_Null__J(x$4))
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.Integer2intNullConflict__Lscala_Null__ = (function(x$5) {
  return ScalaJS.bI(this.Integer2intNullConflict__Lscala_Null__I(x$5))
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.Character2charNullConflict__Lscala_Null__ = (function(x$6) {
  return ScalaJS.bC(this.Character2charNullConflict__Lscala_Null__C(x$6))
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.Short2shortNullConflict__Lscala_Null__ = (function(x$7) {
  return ScalaJS.bS(this.Short2shortNullConflict__Lscala_Null__S(x$7))
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.Byte2byteNullConflict__Lscala_Null__ = (function(x$8) {
  return ScalaJS.bB(this.Byte2byteNullConflict__Lscala_Null__B(x$8))
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.booleanWrapper__Z__ = (function(x$9) {
  return new ScalaJS.c.scala_runtime_RichBoolean().init___Z(this.booleanWrapper__Z__Z(x$9))
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.doubleWrapper__D__ = (function(x$10) {
  return new ScalaJS.c.scala_runtime_RichDouble().init___D(this.doubleWrapper__D__D(x$10))
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.floatWrapper__F__ = (function(x$11) {
  return new ScalaJS.c.scala_runtime_RichFloat().init___F(this.floatWrapper__F__F(x$11))
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.longWrapper__J__ = (function(x$12) {
  return new ScalaJS.c.scala_runtime_RichLong().init___J(this.longWrapper__J__J(x$12))
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.charWrapper__C__ = (function(c) {
  return new ScalaJS.c.scala_runtime_RichChar().init___C(this.charWrapper__C__C(c))
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.intWrapper__I__ = (function(x$13) {
  return new ScalaJS.c.scala_runtime_RichInt().init___I(this.intWrapper__I__I(x$13))
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.shortWrapper__S__ = (function(x$14) {
  return new ScalaJS.c.scala_runtime_RichShort().init___S(this.shortWrapper__S__S(x$14))
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.byteWrapper__B__ = (function(x$15) {
  return new ScalaJS.c.scala_runtime_RichByte().init___B(this.byteWrapper__B__B(x$15))
});
/** @constructor */
ScalaJS.inheritable.scala_LowPriorityImplicits = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_LowPriorityImplicits.prototype = ScalaJS.c.scala_LowPriorityImplicits.prototype;
ScalaJS.is.scala_LowPriorityImplicits = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_LowPriorityImplicits)))
});
ScalaJS.as.scala_LowPriorityImplicits = (function(obj) {
  if ((ScalaJS.is.scala_LowPriorityImplicits(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.LowPriorityImplicits")
  }
});
ScalaJS.isArrayOf.scala_LowPriorityImplicits = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_LowPriorityImplicits)))
});
ScalaJS.asArrayOf.scala_LowPriorityImplicits = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_LowPriorityImplicits(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.LowPriorityImplicits;", depth)
  }
});
ScalaJS.data.scala_LowPriorityImplicits = new ScalaJS.ClassTypeData({
  scala_LowPriorityImplicits: 0
}, false, "scala.LowPriorityImplicits", ScalaJS.data.java_lang_Object, {
  scala_LowPriorityImplicits: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_LowPriorityImplicits.prototype.$classData = ScalaJS.data.scala_LowPriorityImplicits;
//@ sourceMappingURL=LowPriorityImplicits.js.map
