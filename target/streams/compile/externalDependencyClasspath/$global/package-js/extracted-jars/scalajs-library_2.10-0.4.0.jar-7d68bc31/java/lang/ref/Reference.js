/** @constructor */
ScalaJS.c.java_lang_ref_Reference = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.referent$1 = null
});
ScalaJS.c.java_lang_ref_Reference.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_ref_Reference.prototype.constructor = ScalaJS.c.java_lang_ref_Reference;
ScalaJS.c.java_lang_ref_Reference.prototype.get__O = (function() {
  return this.referent$1
});
ScalaJS.c.java_lang_ref_Reference.prototype.clear__V = (function() {
  this.referent$1 = null
});
ScalaJS.c.java_lang_ref_Reference.prototype.isEnqueued__Z = (function() {
  return false
});
ScalaJS.c.java_lang_ref_Reference.prototype.enqueue__Z = (function() {
  return false
});
ScalaJS.c.java_lang_ref_Reference.prototype.init___O = (function(referent) {
  this.referent$1 = referent;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.java_lang_ref_Reference.prototype.enqueue__ = (function() {
  return ScalaJS.bZ(this.enqueue__Z())
});
ScalaJS.c.java_lang_ref_Reference.prototype.isEnqueued__ = (function() {
  return ScalaJS.bZ(this.isEnqueued__Z())
});
ScalaJS.c.java_lang_ref_Reference.prototype.clear__ = (function() {
  return ScalaJS.bV(this.clear__V())
});
ScalaJS.c.java_lang_ref_Reference.prototype.get__ = (function() {
  return this.get__O()
});
/** @constructor */
ScalaJS.inheritable.java_lang_ref_Reference = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_ref_Reference.prototype = ScalaJS.c.java_lang_ref_Reference.prototype;
ScalaJS.is.java_lang_ref_Reference = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_ref_Reference)))
});
ScalaJS.as.java_lang_ref_Reference = (function(obj) {
  if ((ScalaJS.is.java_lang_ref_Reference(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.ref.Reference")
  }
});
ScalaJS.isArrayOf.java_lang_ref_Reference = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_ref_Reference)))
});
ScalaJS.asArrayOf.java_lang_ref_Reference = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_ref_Reference(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.ref.Reference;", depth)
  }
});
ScalaJS.data.java_lang_ref_Reference = new ScalaJS.ClassTypeData({
  java_lang_ref_Reference: 0
}, false, "java.lang.ref.Reference", ScalaJS.data.java_lang_Object, {
  java_lang_ref_Reference: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_ref_Reference.prototype.$classData = ScalaJS.data.java_lang_ref_Reference;
//@ sourceMappingURL=Reference.js.map
