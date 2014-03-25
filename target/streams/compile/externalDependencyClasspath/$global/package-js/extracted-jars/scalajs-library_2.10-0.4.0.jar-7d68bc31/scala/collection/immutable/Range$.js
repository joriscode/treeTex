/** @constructor */
ScalaJS.c.scala_collection_immutable_Range$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.MAX$undPRINT$1 = 0
});
ScalaJS.c.scala_collection_immutable_Range$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_Range$.prototype.constructor = ScalaJS.c.scala_collection_immutable_Range$;
ScalaJS.c.scala_collection_immutable_Range$.prototype.MAX$undPRINT__I = (function() {
  return this.MAX$undPRINT$1
});
ScalaJS.c.scala_collection_immutable_Range$.prototype.count__I__I__I__Z__I = (function(start, end, step, isInclusive) {
  if ((step === 0)) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T("step cannot be 0.")
  };
  if ((start === end)) {
    var isEmpty = (!isInclusive)
  } else {
    if ((start < end)) {
      var isEmpty = (step < 0)
    } else {
      var isEmpty = (step > 0)
    }
  };
  if (isEmpty) {
    return 0
  } else {
    var gap = ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(end).$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(start));
    var jumps = gap.$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(step));
    var hasStub = (isInclusive || gap.$$percent__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(step)).notEquals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(0)));
    var jsx$4 = jumps;
    var jsx$3 = ScalaJS.modules.scala_scalajs_runtime_Long();
    if (hasStub) {
      var jsx$2 = 1
    } else {
      var jsx$2 = 0
    };
    var jsx$1 = jsx$3.fromInt__I__Lscala_scalajs_runtime_Long(jsx$2);
    var result = jsx$4.$$plus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(jsx$1);
    if (result.$$greater__Lscala_scalajs_runtime_Long__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(2147483647))) {
      return -1
    } else {
      return result.toInt__I()
    }
  }
});
ScalaJS.c.scala_collection_immutable_Range$.prototype.count__I__I__I__I = (function(start, end, step) {
  return this.count__I__I__I__Z__I(start, end, step, false)
});
ScalaJS.c.scala_collection_immutable_Range$.prototype.apply__I__I__I__Lscala_collection_immutable_Range = (function(start, end, step) {
  return new ScalaJS.c.scala_collection_immutable_Range().init___I__I__I(start, end, step)
});
ScalaJS.c.scala_collection_immutable_Range$.prototype.apply__I__I__Lscala_collection_immutable_Range = (function(start, end) {
  return new ScalaJS.c.scala_collection_immutable_Range().init___I__I__I(start, end, 1)
});
ScalaJS.c.scala_collection_immutable_Range$.prototype.inclusive__I__I__I__Lscala_collection_immutable_Range$Inclusive = (function(start, end, step) {
  return new ScalaJS.c.scala_collection_immutable_Range$Inclusive().init___I__I__I(start, end, step)
});
ScalaJS.c.scala_collection_immutable_Range$.prototype.inclusive__I__I__Lscala_collection_immutable_Range$Inclusive = (function(start, end) {
  return new ScalaJS.c.scala_collection_immutable_Range$Inclusive().init___I__I__I(start, end, 1)
});
ScalaJS.c.scala_collection_immutable_Range$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_Range()
});
ScalaJS.c.scala_collection_immutable_Range$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_immutable_Range = this;
  this.MAX$undPRINT$1 = 512;
  return this
});
ScalaJS.c.scala_collection_immutable_Range$.prototype.inclusive__I__I__ = (function(start, end) {
  return this.inclusive__I__I__Lscala_collection_immutable_Range$Inclusive(start, end)
});
ScalaJS.c.scala_collection_immutable_Range$.prototype.inclusive__I__I__I__ = (function(start$2, end$2, step) {
  return this.inclusive__I__I__I__Lscala_collection_immutable_Range$Inclusive(start$2, end$2, step)
});
ScalaJS.c.scala_collection_immutable_Range$.prototype.apply__I__I__ = (function(start$3, end$3) {
  return this.apply__I__I__Lscala_collection_immutable_Range(start$3, end$3)
});
ScalaJS.c.scala_collection_immutable_Range$.prototype.apply__I__I__I__ = (function(start$4, end$4, step$2) {
  return this.apply__I__I__I__Lscala_collection_immutable_Range(start$4, end$4, step$2)
});
ScalaJS.c.scala_collection_immutable_Range$.prototype.count__I__I__I__ = (function(start$5, end$5, step$3) {
  return ScalaJS.bI(this.count__I__I__I__I(start$5, end$5, step$3))
});
ScalaJS.c.scala_collection_immutable_Range$.prototype.count__I__I__I__Z__ = (function(start$6, end$6, step$4, isInclusive) {
  return ScalaJS.bI(this.count__I__I__I__Z__I(start$6, end$6, step$4, isInclusive))
});
ScalaJS.c.scala_collection_immutable_Range$.prototype.MAX$undPRINT__ = (function() {
  return ScalaJS.bI(this.MAX$undPRINT__I())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Range$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Range$.prototype = ScalaJS.c.scala_collection_immutable_Range$.prototype;
ScalaJS.is.scala_collection_immutable_Range$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Range$)))
});
ScalaJS.as.scala_collection_immutable_Range$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Range$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Range")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Range$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Range$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Range$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Range$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Range;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Range$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Range$: 0
}, false, "scala.collection.immutable.Range$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_Range$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_Range$.prototype.$classData = ScalaJS.data.scala_collection_immutable_Range$;
ScalaJS.moduleInstances.scala_collection_immutable_Range = undefined;
ScalaJS.modules.scala_collection_immutable_Range = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_Range)) {
    ScalaJS.moduleInstances.scala_collection_immutable_Range = new ScalaJS.c.scala_collection_immutable_Range$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_Range
});
//@ sourceMappingURL=Range$.js.map
