/** @constructor */
ScalaJS.c.java_lang_Byte$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.TYPE$1 = null;
  this.MIN$undVALUE$1 = 0;
  this.MAX$undVALUE$1 = 0;
  this.SIZE$1 = 0
});
ScalaJS.c.java_lang_Byte$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_Byte$.prototype.constructor = ScalaJS.c.java_lang_Byte$;
ScalaJS.c.java_lang_Byte$.prototype.TYPE__Ljava_lang_Class = (function() {
  return this.TYPE$1
});
ScalaJS.c.java_lang_Byte$.prototype.MIN$undVALUE__B = (function() {
  return this.MIN$undVALUE$1
});
ScalaJS.c.java_lang_Byte$.prototype.MAX$undVALUE__B = (function() {
  return this.MAX$undVALUE$1
});
ScalaJS.c.java_lang_Byte$.prototype.SIZE__I = (function() {
  return this.SIZE$1
});
ScalaJS.c.java_lang_Byte$.prototype.valueOf__B__Ljava_lang_Byte = (function(byteValue) {
  return new ScalaJS.c.java_lang_Byte().init___B(byteValue)
});
ScalaJS.c.java_lang_Byte$.prototype.parseByte__T__B = (function(s) {
  return ScalaJS.modules.java_lang_Integer().parseInt__T__I(s)
});
ScalaJS.c.java_lang_Byte$.prototype.toString__B__T = (function(b) {
  return ScalaJS.modules.java_lang_Integer().valueOf__I__Ljava_lang_Integer(b).toString__T()
});
ScalaJS.c.java_lang_Byte$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.java_lang_Byte = this;
  this.TYPE$1 = ScalaJS.data.scala_Byte.getClassOf();
  this.MIN$undVALUE$1 = -128;
  this.MAX$undVALUE$1 = 127;
  this.SIZE$1 = 8;
  return this
});
ScalaJS.c.java_lang_Byte$.prototype.toString__B__ = (function(b) {
  return this.toString__B__T(b)
});
ScalaJS.c.java_lang_Byte$.prototype.parseByte__T__ = (function(s) {
  return ScalaJS.bB(this.parseByte__T__B(s))
});
ScalaJS.c.java_lang_Byte$.prototype.valueOf__B__ = (function(byteValue) {
  return this.valueOf__B__Ljava_lang_Byte(byteValue)
});
ScalaJS.c.java_lang_Byte$.prototype.SIZE__ = (function() {
  return ScalaJS.bI(this.SIZE__I())
});
ScalaJS.c.java_lang_Byte$.prototype.MAX$undVALUE__ = (function() {
  return ScalaJS.bB(this.MAX$undVALUE__B())
});
ScalaJS.c.java_lang_Byte$.prototype.MIN$undVALUE__ = (function() {
  return ScalaJS.bB(this.MIN$undVALUE__B())
});
ScalaJS.c.java_lang_Byte$.prototype.TYPE__ = (function() {
  return this.TYPE__Ljava_lang_Class()
});
/** @constructor */
ScalaJS.inheritable.java_lang_Byte$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_Byte$.prototype = ScalaJS.c.java_lang_Byte$.prototype;
ScalaJS.is.java_lang_Byte$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_Byte$)))
});
ScalaJS.as.java_lang_Byte$ = (function(obj) {
  if ((ScalaJS.is.java_lang_Byte$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.Byte")
  }
});
ScalaJS.isArrayOf.java_lang_Byte$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_Byte$)))
});
ScalaJS.asArrayOf.java_lang_Byte$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_Byte$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.Byte;", depth)
  }
});
ScalaJS.data.java_lang_Byte$ = new ScalaJS.ClassTypeData({
  java_lang_Byte$: 0
}, false, "java.lang.Byte$", ScalaJS.data.java_lang_Object, {
  java_lang_Byte$: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_Byte$.prototype.$classData = ScalaJS.data.java_lang_Byte$;
ScalaJS.moduleInstances.java_lang_Byte = undefined;
ScalaJS.modules.java_lang_Byte = (function() {
  if ((!ScalaJS.moduleInstances.java_lang_Byte)) {
    ScalaJS.moduleInstances.java_lang_Byte = new ScalaJS.c.java_lang_Byte$().init___()
  };
  return ScalaJS.moduleInstances.java_lang_Byte
});
//@ sourceMappingURL=Byte$.js.map
