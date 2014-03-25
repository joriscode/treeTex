/** @constructor */
ScalaJS.c.java_lang_Class = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.data$1 = null
});
ScalaJS.c.java_lang_Class.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_Class.prototype.constructor = ScalaJS.c.java_lang_Class;
ScalaJS.c.java_lang_Class.prototype.data__Lscala_scalajs_js_Dynamic = (function() {
  return this.data$1
});
ScalaJS.c.java_lang_Class.prototype.toString__T = (function() {
  if (this.isInterface__Z()) {
    var jsx$2 = "interface "
  } else {
    if (this.isPrimitive__Z()) {
      var jsx$2 = ""
    } else {
      var jsx$2 = "class "
    }
  };
  var jsx$1 = ("" + jsx$2);
  return (jsx$1 + this.getName__T())
});
ScalaJS.c.java_lang_Class.prototype.isInstance__O__Z = (function(obj) {
  return this.data__Lscala_scalajs_js_Dynamic().isInstance(obj)
});
ScalaJS.c.java_lang_Class.prototype.isAssignableFrom__Ljava_lang_Class__Z = (function(that) {
  return ScalaJS.dynamicIsAssignableFrom(this.data__Lscala_scalajs_js_Dynamic(), that.data__Lscala_scalajs_js_Dynamic())
});
ScalaJS.c.java_lang_Class.prototype.isInterface__Z = (function() {
  return this.data__Lscala_scalajs_js_Dynamic().isInterface
});
ScalaJS.c.java_lang_Class.prototype.isArray__Z = (function() {
  return this.data__Lscala_scalajs_js_Dynamic().isArrayClass
});
ScalaJS.c.java_lang_Class.prototype.isPrimitive__Z = (function() {
  return this.data__Lscala_scalajs_js_Dynamic().isPrimitive
});
ScalaJS.c.java_lang_Class.prototype.getName__T = (function() {
  return this.data__Lscala_scalajs_js_Dynamic().displayName
});
ScalaJS.c.java_lang_Class.prototype.getSuperClass__Ljava_lang_Class = (function() {
  if ((!this.data__Lscala_scalajs_js_Dynamic().parentData)) {
    return null
  } else {
    return ScalaJS.as.java_lang_Class(this.data__Lscala_scalajs_js_Dynamic().parentData.getClassOf())
  }
});
ScalaJS.c.java_lang_Class.prototype.getComponentType__Ljava_lang_Class = (function() {
  if (this.isArray__Z()) {
    return ScalaJS.as.java_lang_Class(this.data__Lscala_scalajs_js_Dynamic().componentData.getClassOf())
  } else {
    return null
  }
});
ScalaJS.c.java_lang_Class.prototype.getEnclosingClass__Ljava_lang_Class = (function() {
  return null
});
ScalaJS.c.java_lang_Class.prototype.init___Lscala_scalajs_js_Dynamic = (function(data) {
  this.data$1 = data;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.java_lang_Class.prototype.getEnclosingClass__ = (function() {
  return this.getEnclosingClass__Ljava_lang_Class()
});
ScalaJS.c.java_lang_Class.prototype.getComponentType__ = (function() {
  return this.getComponentType__Ljava_lang_Class()
});
ScalaJS.c.java_lang_Class.prototype.getSuperClass__ = (function() {
  return this.getSuperClass__Ljava_lang_Class()
});
ScalaJS.c.java_lang_Class.prototype.getName__ = (function() {
  return this.getName__T()
});
ScalaJS.c.java_lang_Class.prototype.isPrimitive__ = (function() {
  return ScalaJS.bZ(this.isPrimitive__Z())
});
ScalaJS.c.java_lang_Class.prototype.isArray__ = (function() {
  return ScalaJS.bZ(this.isArray__Z())
});
ScalaJS.c.java_lang_Class.prototype.isInterface__ = (function() {
  return ScalaJS.bZ(this.isInterface__Z())
});
ScalaJS.c.java_lang_Class.prototype.isAssignableFrom__Ljava_lang_Class__ = (function(that) {
  return ScalaJS.bZ(this.isAssignableFrom__Ljava_lang_Class__Z(that))
});
ScalaJS.c.java_lang_Class.prototype.isInstance__O__ = (function(obj) {
  return ScalaJS.bZ(this.isInstance__O__Z(obj))
});
ScalaJS.c.java_lang_Class.prototype.data__ = (function() {
  return this.data__Lscala_scalajs_js_Dynamic()
});
/** @constructor */
ScalaJS.inheritable.java_lang_Class = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_Class.prototype = ScalaJS.c.java_lang_Class.prototype;
ScalaJS.is.java_lang_Class = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_Class)))
});
ScalaJS.as.java_lang_Class = (function(obj) {
  if ((ScalaJS.is.java_lang_Class(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.Class")
  }
});
ScalaJS.isArrayOf.java_lang_Class = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_Class)))
});
ScalaJS.asArrayOf.java_lang_Class = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_Class(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.Class;", depth)
  }
});
ScalaJS.data.java_lang_Class = new ScalaJS.ClassTypeData({
  java_lang_Class: 0
}, false, "java.lang.Class", ScalaJS.data.java_lang_Object, {
  java_lang_Class: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_Class.prototype.$classData = ScalaJS.data.java_lang_Class;
//@ sourceMappingURL=Class.js.map
