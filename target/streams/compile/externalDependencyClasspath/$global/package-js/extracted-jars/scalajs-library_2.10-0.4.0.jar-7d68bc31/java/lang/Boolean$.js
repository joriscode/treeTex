/** @constructor */
ScalaJS.c.java_lang_Boolean$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.TYPE$1 = null;
  this.TRUE$1 = null;
  this.FALSE$1 = null
});
ScalaJS.c.java_lang_Boolean$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_Boolean$.prototype.constructor = ScalaJS.c.java_lang_Boolean$;
ScalaJS.c.java_lang_Boolean$.prototype.TYPE__Ljava_lang_Class = (function() {
  return this.TYPE$1
});
ScalaJS.c.java_lang_Boolean$.prototype.TRUE__Ljava_lang_Boolean = (function() {
  return this.TRUE$1
});
ScalaJS.c.java_lang_Boolean$.prototype.FALSE__Ljava_lang_Boolean = (function() {
  return this.FALSE$1
});
ScalaJS.c.java_lang_Boolean$.prototype.valueOf__Z__Ljava_lang_Boolean = (function(booleanValue) {
  if (booleanValue) {
    return this.TRUE__Ljava_lang_Boolean()
  } else {
    return this.FALSE__Ljava_lang_Boolean()
  }
});
ScalaJS.c.java_lang_Boolean$.prototype.toString__Z__T = (function(b) {
  if (b) {
    return "true"
  } else {
    return "false"
  }
});
ScalaJS.c.java_lang_Boolean$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.java_lang_Boolean = this;
  this.TYPE$1 = ScalaJS.data.scala_Boolean.getClassOf();
  this.TRUE$1 = new ScalaJS.c.java_lang_Boolean().init___Z(true);
  this.FALSE$1 = new ScalaJS.c.java_lang_Boolean().init___Z(false);
  return this
});
ScalaJS.c.java_lang_Boolean$.prototype.toString__Z__ = (function(b) {
  return this.toString__Z__T(b)
});
ScalaJS.c.java_lang_Boolean$.prototype.valueOf__Z__ = (function(booleanValue) {
  return this.valueOf__Z__Ljava_lang_Boolean(booleanValue)
});
ScalaJS.c.java_lang_Boolean$.prototype.FALSE__ = (function() {
  return this.FALSE__Ljava_lang_Boolean()
});
ScalaJS.c.java_lang_Boolean$.prototype.TRUE__ = (function() {
  return this.TRUE__Ljava_lang_Boolean()
});
ScalaJS.c.java_lang_Boolean$.prototype.TYPE__ = (function() {
  return this.TYPE__Ljava_lang_Class()
});
/** @constructor */
ScalaJS.inheritable.java_lang_Boolean$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_Boolean$.prototype = ScalaJS.c.java_lang_Boolean$.prototype;
ScalaJS.is.java_lang_Boolean$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_Boolean$)))
});
ScalaJS.as.java_lang_Boolean$ = (function(obj) {
  if ((ScalaJS.is.java_lang_Boolean$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.Boolean")
  }
});
ScalaJS.isArrayOf.java_lang_Boolean$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_Boolean$)))
});
ScalaJS.asArrayOf.java_lang_Boolean$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_Boolean$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.Boolean;", depth)
  }
});
ScalaJS.data.java_lang_Boolean$ = new ScalaJS.ClassTypeData({
  java_lang_Boolean$: 0
}, false, "java.lang.Boolean$", ScalaJS.data.java_lang_Object, {
  java_lang_Boolean$: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_Boolean$.prototype.$classData = ScalaJS.data.java_lang_Boolean$;
ScalaJS.moduleInstances.java_lang_Boolean = undefined;
ScalaJS.modules.java_lang_Boolean = (function() {
  if ((!ScalaJS.moduleInstances.java_lang_Boolean)) {
    ScalaJS.moduleInstances.java_lang_Boolean = new ScalaJS.c.java_lang_Boolean$().init___()
  };
  return ScalaJS.moduleInstances.java_lang_Boolean
});
//@ sourceMappingURL=Boolean$.js.map
