/** @constructor */
ScalaJS.c.java_util_FormattableFlags$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.ALTERNATE$1 = 0;
  this.LEFT$undJUSTIFY$1 = 0;
  this.UPPERCASE$1 = 0
});
ScalaJS.c.java_util_FormattableFlags$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_util_FormattableFlags$.prototype.constructor = ScalaJS.c.java_util_FormattableFlags$;
ScalaJS.c.java_util_FormattableFlags$.prototype.ALTERNATE__I = (function() {
  return this.ALTERNATE$1
});
ScalaJS.c.java_util_FormattableFlags$.prototype.LEFT$undJUSTIFY__I = (function() {
  return this.LEFT$undJUSTIFY$1
});
ScalaJS.c.java_util_FormattableFlags$.prototype.UPPERCASE__I = (function() {
  return this.UPPERCASE$1
});
ScalaJS.c.java_util_FormattableFlags$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.java_util_FormattableFlags = this;
  this.ALTERNATE$1 = 4;
  this.LEFT$undJUSTIFY$1 = 1;
  this.UPPERCASE$1 = 2;
  return this
});
ScalaJS.c.java_util_FormattableFlags$.prototype.UPPERCASE__ = (function() {
  return ScalaJS.bI(this.UPPERCASE__I())
});
ScalaJS.c.java_util_FormattableFlags$.prototype.LEFT$undJUSTIFY__ = (function() {
  return ScalaJS.bI(this.LEFT$undJUSTIFY__I())
});
ScalaJS.c.java_util_FormattableFlags$.prototype.ALTERNATE__ = (function() {
  return ScalaJS.bI(this.ALTERNATE__I())
});
/** @constructor */
ScalaJS.inheritable.java_util_FormattableFlags$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_FormattableFlags$.prototype = ScalaJS.c.java_util_FormattableFlags$.prototype;
ScalaJS.is.java_util_FormattableFlags$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_FormattableFlags$)))
});
ScalaJS.as.java_util_FormattableFlags$ = (function(obj) {
  if ((ScalaJS.is.java_util_FormattableFlags$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.FormattableFlags")
  }
});
ScalaJS.isArrayOf.java_util_FormattableFlags$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_FormattableFlags$)))
});
ScalaJS.asArrayOf.java_util_FormattableFlags$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_FormattableFlags$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.FormattableFlags;", depth)
  }
});
ScalaJS.data.java_util_FormattableFlags$ = new ScalaJS.ClassTypeData({
  java_util_FormattableFlags$: 0
}, false, "java.util.FormattableFlags$", ScalaJS.data.java_lang_Object, {
  java_util_FormattableFlags$: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_FormattableFlags$.prototype.$classData = ScalaJS.data.java_util_FormattableFlags$;
ScalaJS.moduleInstances.java_util_FormattableFlags = undefined;
ScalaJS.modules.java_util_FormattableFlags = (function() {
  if ((!ScalaJS.moduleInstances.java_util_FormattableFlags)) {
    ScalaJS.moduleInstances.java_util_FormattableFlags = new ScalaJS.c.java_util_FormattableFlags$().init___()
  };
  return ScalaJS.moduleInstances.java_util_FormattableFlags
});
//@ sourceMappingURL=FormattableFlags$.js.map
