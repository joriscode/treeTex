/** @constructor */
ScalaJS.c.scala_util_regexp_Base = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.Alt$module$1 = null;
  this.Sequ$module$1 = null;
  this.Star$module$1 = null;
  this.Eps$module$1 = null
});
ScalaJS.c.scala_util_regexp_Base.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_regexp_Base.prototype.constructor = ScalaJS.c.scala_util_regexp_Base;
ScalaJS.c.scala_util_regexp_Base.prototype.Alt$lzycompute__p1__Lscala_util_regexp_Base$Alt$ = (function() {
  if ((this.Alt$module$1 === null)) {
    this.Alt$module$1 = new ScalaJS.c.scala_util_regexp_Base$Alt$().init___Lscala_util_regexp_Base(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.Alt$module$1
});
ScalaJS.c.scala_util_regexp_Base.prototype.Sequ$lzycompute__p1__Lscala_util_regexp_Base$Sequ$ = (function() {
  if ((this.Sequ$module$1 === null)) {
    this.Sequ$module$1 = new ScalaJS.c.scala_util_regexp_Base$Sequ$().init___Lscala_util_regexp_Base(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.Sequ$module$1
});
ScalaJS.c.scala_util_regexp_Base.prototype.Star$lzycompute__p1__Lscala_util_regexp_Base$Star$ = (function() {
  if ((this.Star$module$1 === null)) {
    this.Star$module$1 = new ScalaJS.c.scala_util_regexp_Base$Star$().init___Lscala_util_regexp_Base(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.Star$module$1
});
ScalaJS.c.scala_util_regexp_Base.prototype.Eps$lzycompute__p1__Lscala_util_regexp_Base$Eps$ = (function() {
  if ((this.Eps$module$1 === null)) {
    this.Eps$module$1 = new ScalaJS.c.scala_util_regexp_Base$Eps$().init___Lscala_util_regexp_Base(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.Eps$module$1
});
ScalaJS.c.scala_util_regexp_Base.prototype.Alt__Lscala_util_regexp_Base$Alt$ = (function() {
  if ((this.Alt$module$1 === null)) {
    return this.Alt$lzycompute__p1__Lscala_util_regexp_Base$Alt$()
  } else {
    return this.Alt$module$1
  }
});
ScalaJS.c.scala_util_regexp_Base.prototype.Sequ__Lscala_util_regexp_Base$Sequ$ = (function() {
  if ((this.Sequ$module$1 === null)) {
    return this.Sequ$lzycompute__p1__Lscala_util_regexp_Base$Sequ$()
  } else {
    return this.Sequ$module$1
  }
});
ScalaJS.c.scala_util_regexp_Base.prototype.Star__Lscala_util_regexp_Base$Star$ = (function() {
  if ((this.Star$module$1 === null)) {
    return this.Star$lzycompute__p1__Lscala_util_regexp_Base$Star$()
  } else {
    return this.Star$module$1
  }
});
ScalaJS.c.scala_util_regexp_Base.prototype.Eps__Lscala_util_regexp_Base$Eps$ = (function() {
  if ((this.Eps$module$1 === null)) {
    return this.Eps$lzycompute__p1__Lscala_util_regexp_Base$Eps$()
  } else {
    return this.Eps$module$1
  }
});
ScalaJS.c.scala_util_regexp_Base.prototype.Eps__ = (function() {
  return this.Eps__Lscala_util_regexp_Base$Eps$()
});
ScalaJS.c.scala_util_regexp_Base.prototype.Star__ = (function() {
  return this.Star__Lscala_util_regexp_Base$Star$()
});
ScalaJS.c.scala_util_regexp_Base.prototype.Sequ__ = (function() {
  return this.Sequ__Lscala_util_regexp_Base$Sequ$()
});
ScalaJS.c.scala_util_regexp_Base.prototype.Alt__ = (function() {
  return this.Alt__Lscala_util_regexp_Base$Alt$()
});
/** @constructor */
ScalaJS.inheritable.scala_util_regexp_Base = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_regexp_Base.prototype = ScalaJS.c.scala_util_regexp_Base.prototype;
ScalaJS.is.scala_util_regexp_Base = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_regexp_Base)))
});
ScalaJS.as.scala_util_regexp_Base = (function(obj) {
  if ((ScalaJS.is.scala_util_regexp_Base(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.regexp.Base")
  }
});
ScalaJS.isArrayOf.scala_util_regexp_Base = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_regexp_Base)))
});
ScalaJS.asArrayOf.scala_util_regexp_Base = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_regexp_Base(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.regexp.Base;", depth)
  }
});
ScalaJS.data.scala_util_regexp_Base = new ScalaJS.ClassTypeData({
  scala_util_regexp_Base: 0
}, false, "scala.util.regexp.Base", ScalaJS.data.java_lang_Object, {
  scala_util_regexp_Base: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_regexp_Base.prototype.$classData = ScalaJS.data.scala_util_regexp_Base;
//@ sourceMappingURL=Base.js.map
