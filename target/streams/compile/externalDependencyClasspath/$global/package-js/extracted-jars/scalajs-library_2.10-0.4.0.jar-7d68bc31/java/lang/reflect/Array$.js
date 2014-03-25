/** @constructor */
ScalaJS.c.java_lang_reflect_Array$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.java_lang_reflect_Array$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_reflect_Array$.prototype.constructor = ScalaJS.c.java_lang_reflect_Array$;
ScalaJS.c.java_lang_reflect_Array$.prototype.getUnderlying__O__Lscala_scalajs_js_Array = (function(array) {
  return array.underlying
});
ScalaJS.c.java_lang_reflect_Array$.prototype.newInstance__Ljava_lang_Class__I__O = (function(componentType, length) {
  return this.newArray__p1__Ljava_lang_Class__I__O(componentType, length)
});
ScalaJS.c.java_lang_reflect_Array$.prototype.newInstance__Ljava_lang_Class__AI__O = (function(componentType, dimensions) {
  return this.multiNewArray__p1__Ljava_lang_Class__AI__O(componentType, dimensions)
});
ScalaJS.c.java_lang_reflect_Array$.prototype.getLength__O__I = (function(array) {
  return (this.getUnderlying__O__Lscala_scalajs_js_Array(array)["length"] | 0)
});
ScalaJS.c.java_lang_reflect_Array$.prototype.get__O__I__O = (function(array, index) {
  return this.getUnderlying__O__Lscala_scalajs_js_Array(array)[index]
});
ScalaJS.c.java_lang_reflect_Array$.prototype.getBoolean__O__I__Z = (function(array, index) {
  return this.getUnderlying__O__Lscala_scalajs_js_Array(array)[index]
});
ScalaJS.c.java_lang_reflect_Array$.prototype.getByte__O__I__B = (function(array, index) {
  return (this.getUnderlying__O__Lscala_scalajs_js_Array(array)[index] | 0)
});
ScalaJS.c.java_lang_reflect_Array$.prototype.getChar__O__I__C = (function(array, index) {
  return ((this.getUnderlying__O__Lscala_scalajs_js_Array(array)[index] | 0) & 65535)
});
ScalaJS.c.java_lang_reflect_Array$.prototype.getShort__O__I__S = (function(array, index) {
  return (this.getUnderlying__O__Lscala_scalajs_js_Array(array)[index] | 0)
});
ScalaJS.c.java_lang_reflect_Array$.prototype.getInt__O__I__I = (function(array, index) {
  return (this.getUnderlying__O__Lscala_scalajs_js_Array(array)[index] | 0)
});
ScalaJS.c.java_lang_reflect_Array$.prototype.getLong__O__I__J = (function(array, index) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromDouble__D__Lscala_scalajs_runtime_Long(this.getUnderlying__O__Lscala_scalajs_js_Array(array)[index])
});
ScalaJS.c.java_lang_reflect_Array$.prototype.getFloat__O__I__F = (function(array, index) {
  return this.getUnderlying__O__Lscala_scalajs_js_Array(array)[index]
});
ScalaJS.c.java_lang_reflect_Array$.prototype.getDouble__O__I__D = (function(array, index) {
  return this.getUnderlying__O__Lscala_scalajs_js_Array(array)[index]
});
ScalaJS.c.java_lang_reflect_Array$.prototype.set__O__I__O__V = (function(array, index, value) {
  this.getUnderlying__O__Lscala_scalajs_js_Array(array)[index] = value
});
ScalaJS.c.java_lang_reflect_Array$.prototype.setBoolean__O__I__Z__V = (function(array, index, value) {
  this.getUnderlying__O__Lscala_scalajs_js_Array(array)[index] = value
});
ScalaJS.c.java_lang_reflect_Array$.prototype.setByte__O__I__B__V = (function(array, index, value) {
  this.getUnderlying__O__Lscala_scalajs_js_Array(array)[index] = value
});
ScalaJS.c.java_lang_reflect_Array$.prototype.setChar__O__I__C__V = (function(array, index, value) {
  this.getUnderlying__O__Lscala_scalajs_js_Array(array)[index] = value
});
ScalaJS.c.java_lang_reflect_Array$.prototype.setShort__O__I__S__V = (function(array, index, value) {
  this.getUnderlying__O__Lscala_scalajs_js_Array(array)[index] = value
});
ScalaJS.c.java_lang_reflect_Array$.prototype.setInt__O__I__I__V = (function(array, index, value) {
  this.getUnderlying__O__Lscala_scalajs_js_Array(array)[index] = value
});
ScalaJS.c.java_lang_reflect_Array$.prototype.setLong__O__I__J__V = (function(array, index, value) {
  this.getUnderlying__O__Lscala_scalajs_js_Array(array)[index] = ScalaJS.modules.scala_scalajs_js_Any().fromLong__J__Lscala_scalajs_js_Number(value)
});
ScalaJS.c.java_lang_reflect_Array$.prototype.setFloat__O__I__F__V = (function(array, index, value) {
  this.getUnderlying__O__Lscala_scalajs_js_Array(array)[index] = value
});
ScalaJS.c.java_lang_reflect_Array$.prototype.setDouble__O__I__D__V = (function(array, index, value) {
  this.getUnderlying__O__Lscala_scalajs_js_Array(array)[index] = value
});
ScalaJS.c.java_lang_reflect_Array$.prototype.newArray__p1__Ljava_lang_Class__I__O = (function(componentType, length) {
  return ScalaJS.newArrayObject(componentType.data__Lscala_scalajs_js_Dynamic().getArrayOf(), [length])
});
ScalaJS.c.java_lang_reflect_Array$.prototype.multiNewArray__p1__Ljava_lang_Class__AI__O = (function(componentType, dimensions) {
  var lengths = this.getUnderlying__O__Lscala_scalajs_js_Array(dimensions);
  var arrayClassData = componentType.data__Lscala_scalajs_js_Dynamic();
  var i = 0;
  while ((i < lengths["length"])) {
    arrayClassData = arrayClassData.getArrayOf();
    i = (i + 1)
  };
  return ScalaJS.newArrayObject(arrayClassData, lengths)
});
ScalaJS.c.java_lang_reflect_Array$.prototype.setDouble__O__I__D__ = (function(array, index, value) {
  return ScalaJS.bV(this.setDouble__O__I__D__V(array, index, value))
});
ScalaJS.c.java_lang_reflect_Array$.prototype.setFloat__O__I__F__ = (function(array$2, index$2, value$2) {
  return ScalaJS.bV(this.setFloat__O__I__F__V(array$2, index$2, value$2))
});
ScalaJS.c.java_lang_reflect_Array$.prototype.setLong__O__I__J__ = (function(array$3, index$3, value$3) {
  return ScalaJS.bV(this.setLong__O__I__J__V(array$3, index$3, value$3))
});
ScalaJS.c.java_lang_reflect_Array$.prototype.setInt__O__I__I__ = (function(array$4, index$4, value$4) {
  return ScalaJS.bV(this.setInt__O__I__I__V(array$4, index$4, value$4))
});
ScalaJS.c.java_lang_reflect_Array$.prototype.setShort__O__I__S__ = (function(array$5, index$5, value$5) {
  return ScalaJS.bV(this.setShort__O__I__S__V(array$5, index$5, value$5))
});
ScalaJS.c.java_lang_reflect_Array$.prototype.setChar__O__I__C__ = (function(array$6, index$6, value$6) {
  return ScalaJS.bV(this.setChar__O__I__C__V(array$6, index$6, value$6))
});
ScalaJS.c.java_lang_reflect_Array$.prototype.setByte__O__I__B__ = (function(array$7, index$7, value$7) {
  return ScalaJS.bV(this.setByte__O__I__B__V(array$7, index$7, value$7))
});
ScalaJS.c.java_lang_reflect_Array$.prototype.setBoolean__O__I__Z__ = (function(array$8, index$8, value$8) {
  return ScalaJS.bV(this.setBoolean__O__I__Z__V(array$8, index$8, value$8))
});
ScalaJS.c.java_lang_reflect_Array$.prototype.set__O__I__O__ = (function(array$9, index$9, value$9) {
  return ScalaJS.bV(this.set__O__I__O__V(array$9, index$9, value$9))
});
ScalaJS.c.java_lang_reflect_Array$.prototype.getDouble__O__I__ = (function(array$10, index$10) {
  return ScalaJS.bD(this.getDouble__O__I__D(array$10, index$10))
});
ScalaJS.c.java_lang_reflect_Array$.prototype.getFloat__O__I__ = (function(array$11, index$11) {
  return ScalaJS.bF(this.getFloat__O__I__F(array$11, index$11))
});
ScalaJS.c.java_lang_reflect_Array$.prototype.getLong__O__I__ = (function(array$12, index$12) {
  return ScalaJS.bJ(this.getLong__O__I__J(array$12, index$12))
});
ScalaJS.c.java_lang_reflect_Array$.prototype.getInt__O__I__ = (function(array$13, index$13) {
  return ScalaJS.bI(this.getInt__O__I__I(array$13, index$13))
});
ScalaJS.c.java_lang_reflect_Array$.prototype.getShort__O__I__ = (function(array$14, index$14) {
  return ScalaJS.bS(this.getShort__O__I__S(array$14, index$14))
});
ScalaJS.c.java_lang_reflect_Array$.prototype.getChar__O__I__ = (function(array$15, index$15) {
  return ScalaJS.bC(this.getChar__O__I__C(array$15, index$15))
});
ScalaJS.c.java_lang_reflect_Array$.prototype.getByte__O__I__ = (function(array$16, index$16) {
  return ScalaJS.bB(this.getByte__O__I__B(array$16, index$16))
});
ScalaJS.c.java_lang_reflect_Array$.prototype.getBoolean__O__I__ = (function(array$17, index$17) {
  return ScalaJS.bZ(this.getBoolean__O__I__Z(array$17, index$17))
});
ScalaJS.c.java_lang_reflect_Array$.prototype.get__O__I__ = (function(array$18, index$18) {
  return this.get__O__I__O(array$18, index$18)
});
ScalaJS.c.java_lang_reflect_Array$.prototype.getLength__O__ = (function(array$19) {
  return ScalaJS.bI(this.getLength__O__I(array$19))
});
ScalaJS.c.java_lang_reflect_Array$.prototype.newInstance__Ljava_lang_Class__AI__ = (function(componentType, dimensions) {
  return this.newInstance__Ljava_lang_Class__AI__O(componentType, dimensions)
});
ScalaJS.c.java_lang_reflect_Array$.prototype.newInstance__Ljava_lang_Class__I__ = (function(componentType$2, length) {
  return this.newInstance__Ljava_lang_Class__I__O(componentType$2, length)
});
ScalaJS.c.java_lang_reflect_Array$.prototype.getUnderlying__O__ = (function(array$20) {
  return this.getUnderlying__O__Lscala_scalajs_js_Array(array$20)
});
/** @constructor */
ScalaJS.inheritable.java_lang_reflect_Array$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_reflect_Array$.prototype = ScalaJS.c.java_lang_reflect_Array$.prototype;
ScalaJS.is.java_lang_reflect_Array$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_reflect_Array$)))
});
ScalaJS.as.java_lang_reflect_Array$ = (function(obj) {
  if ((ScalaJS.is.java_lang_reflect_Array$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.reflect.Array")
  }
});
ScalaJS.isArrayOf.java_lang_reflect_Array$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_reflect_Array$)))
});
ScalaJS.asArrayOf.java_lang_reflect_Array$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_reflect_Array$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.reflect.Array;", depth)
  }
});
ScalaJS.data.java_lang_reflect_Array$ = new ScalaJS.ClassTypeData({
  java_lang_reflect_Array$: 0
}, false, "java.lang.reflect.Array$", ScalaJS.data.java_lang_Object, {
  java_lang_reflect_Array$: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_reflect_Array$.prototype.$classData = ScalaJS.data.java_lang_reflect_Array$;
ScalaJS.moduleInstances.java_lang_reflect_Array = undefined;
ScalaJS.modules.java_lang_reflect_Array = (function() {
  if ((!ScalaJS.moduleInstances.java_lang_reflect_Array)) {
    ScalaJS.moduleInstances.java_lang_reflect_Array = new ScalaJS.c.java_lang_reflect_Array$().init___()
  };
  return ScalaJS.moduleInstances.java_lang_reflect_Array
});
//@ sourceMappingURL=Array$.js.map
