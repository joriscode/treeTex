/** @constructor */
ScalaJS.c.scala_util_regexp_WordExp = (function() {
  ScalaJS.c.scala_util_regexp_Base.call(this);
  this.Letter$module$2 = null;
  this.Wildcard$module$2 = null
});
ScalaJS.c.scala_util_regexp_WordExp.prototype = new ScalaJS.inheritable.scala_util_regexp_Base();
ScalaJS.c.scala_util_regexp_WordExp.prototype.constructor = ScalaJS.c.scala_util_regexp_WordExp;
ScalaJS.c.scala_util_regexp_WordExp.prototype.Letter$lzycompute__p2__Lscala_util_regexp_WordExp$Letter$ = (function() {
  if ((this.Letter$module$2 === null)) {
    this.Letter$module$2 = new ScalaJS.c.scala_util_regexp_WordExp$Letter$().init___Lscala_util_regexp_WordExp(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.Letter$module$2
});
ScalaJS.c.scala_util_regexp_WordExp.prototype.Wildcard$lzycompute__p2__Lscala_util_regexp_WordExp$Wildcard$ = (function() {
  if ((this.Wildcard$module$2 === null)) {
    this.Wildcard$module$2 = new ScalaJS.c.scala_util_regexp_WordExp$Wildcard$().init___Lscala_util_regexp_WordExp(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.Wildcard$module$2
});
ScalaJS.c.scala_util_regexp_WordExp.prototype.Letter__Lscala_util_regexp_WordExp$Letter$ = (function() {
  if ((this.Letter$module$2 === null)) {
    return this.Letter$lzycompute__p2__Lscala_util_regexp_WordExp$Letter$()
  } else {
    return this.Letter$module$2
  }
});
ScalaJS.c.scala_util_regexp_WordExp.prototype.Wildcard__Lscala_util_regexp_WordExp$Wildcard$ = (function() {
  if ((this.Wildcard$module$2 === null)) {
    return this.Wildcard$lzycompute__p2__Lscala_util_regexp_WordExp$Wildcard$()
  } else {
    return this.Wildcard$module$2
  }
});
ScalaJS.c.scala_util_regexp_WordExp.prototype.Wildcard__ = (function() {
  return this.Wildcard__Lscala_util_regexp_WordExp$Wildcard$()
});
ScalaJS.c.scala_util_regexp_WordExp.prototype.Letter__ = (function() {
  return this.Letter__Lscala_util_regexp_WordExp$Letter$()
});
/** @constructor */
ScalaJS.inheritable.scala_util_regexp_WordExp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_regexp_WordExp.prototype = ScalaJS.c.scala_util_regexp_WordExp.prototype;
ScalaJS.is.scala_util_regexp_WordExp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_regexp_WordExp)))
});
ScalaJS.as.scala_util_regexp_WordExp = (function(obj) {
  if ((ScalaJS.is.scala_util_regexp_WordExp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.regexp.WordExp")
  }
});
ScalaJS.isArrayOf.scala_util_regexp_WordExp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_regexp_WordExp)))
});
ScalaJS.asArrayOf.scala_util_regexp_WordExp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_regexp_WordExp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.regexp.WordExp;", depth)
  }
});
ScalaJS.data.scala_util_regexp_WordExp = new ScalaJS.ClassTypeData({
  scala_util_regexp_WordExp: 0
}, false, "scala.util.regexp.WordExp", ScalaJS.data.scala_util_regexp_Base, {
  scala_util_regexp_WordExp: 1,
  scala_util_regexp_Base: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_regexp_WordExp.prototype.$classData = ScalaJS.data.scala_util_regexp_WordExp;
//@ sourceMappingURL=WordExp.js.map
