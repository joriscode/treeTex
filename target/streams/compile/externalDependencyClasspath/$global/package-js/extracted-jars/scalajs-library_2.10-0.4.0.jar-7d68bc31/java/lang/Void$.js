/** @constructor */
ScalaJS.c.java_lang_Void$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.TYPE$1 = null
});
ScalaJS.c.java_lang_Void$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_Void$.prototype.constructor = ScalaJS.c.java_lang_Void$;
ScalaJS.c.java_lang_Void$.prototype.TYPE__Ljava_lang_Class = (function() {
  return this.TYPE$1
});
ScalaJS.c.java_lang_Void$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.java_lang_Void = this;
  this.TYPE$1 = ScalaJS.data.scala_Unit.getClassOf();
  return this
});
ScalaJS.c.java_lang_Void$.prototype.TYPE__ = (function() {
  return this.TYPE__Ljava_lang_Class()
});
/** @constructor */
ScalaJS.inheritable.java_lang_Void$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_Void$.prototype = ScalaJS.c.java_lang_Void$.prototype;
ScalaJS.is.java_lang_Void$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_Void$)))
});
ScalaJS.as.java_lang_Void$ = (function(obj) {
  if ((ScalaJS.is.java_lang_Void$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.Void")
  }
});
ScalaJS.isArrayOf.java_lang_Void$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_Void$)))
});
ScalaJS.asArrayOf.java_lang_Void$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_Void$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.Void;", depth)
  }
});
ScalaJS.data.java_lang_Void$ = new ScalaJS.ClassTypeData({
  java_lang_Void$: 0
}, false, "java.lang.Void$", ScalaJS.data.java_lang_Object, {
  java_lang_Void$: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_Void$.prototype.$classData = ScalaJS.data.java_lang_Void$;
ScalaJS.moduleInstances.java_lang_Void = undefined;
ScalaJS.modules.java_lang_Void = (function() {
  if ((!ScalaJS.moduleInstances.java_lang_Void)) {
    ScalaJS.moduleInstances.java_lang_Void = new ScalaJS.c.java_lang_Void$().init___()
  };
  return ScalaJS.moduleInstances.java_lang_Void
});
//@ sourceMappingURL=Void$.js.map
