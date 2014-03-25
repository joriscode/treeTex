/** @constructor */
ScalaJS.c.scala_util_control_TailCalls$Call = (function() {
  ScalaJS.c.scala_util_control_TailCalls$TailRec.call(this);
  this.rest$2 = null
});
ScalaJS.c.scala_util_control_TailCalls$Call.prototype = new ScalaJS.inheritable.scala_util_control_TailCalls$TailRec();
ScalaJS.c.scala_util_control_TailCalls$Call.prototype.constructor = ScalaJS.c.scala_util_control_TailCalls$Call;
ScalaJS.c.scala_util_control_TailCalls$Call.prototype.rest__Lscala_Function0 = (function() {
  return this.rest$2
});
ScalaJS.c.scala_util_control_TailCalls$Call.prototype.copy__Lscala_Function0__Lscala_util_control_TailCalls$Call = (function(rest) {
  return new ScalaJS.c.scala_util_control_TailCalls$Call().init___Lscala_Function0(rest)
});
ScalaJS.c.scala_util_control_TailCalls$Call.prototype.copy$default$1__Lscala_Function0 = (function() {
  return this.rest__Lscala_Function0()
});
ScalaJS.c.scala_util_control_TailCalls$Call.prototype.productPrefix__T = (function() {
  return "Call"
});
ScalaJS.c.scala_util_control_TailCalls$Call.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_util_control_TailCalls$Call.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.rest__Lscala_Function0();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_util_control_TailCalls$Call.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_util_control_TailCalls$Call.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_util_control_TailCalls$Call(x$1)
});
ScalaJS.c.scala_util_control_TailCalls$Call.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_util_control_TailCalls$Call.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_util_control_TailCalls$Call.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_util_control_TailCalls$Call(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Call$1 = ScalaJS.as.scala_util_control_TailCalls$Call(x$1);
      return (ScalaJS.anyRefEqEq(this.rest__Lscala_Function0(), Call$1.rest__Lscala_Function0()) && Call$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_util_control_TailCalls$Call.prototype.init___Lscala_Function0 = (function(rest) {
  this.rest$2 = rest;
  ScalaJS.c.scala_util_control_TailCalls$TailRec.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_util_control_TailCalls$Call.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_util_control_TailCalls$Call.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_util_control_TailCalls$Call.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_util_control_TailCalls$Call.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_util_control_TailCalls$Call.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_util_control_TailCalls$Call.prototype.copy__Lscala_Function0__ = (function(rest) {
  return this.copy__Lscala_Function0__Lscala_util_control_TailCalls$Call(rest)
});
ScalaJS.c.scala_util_control_TailCalls$Call.prototype.rest__ = (function() {
  return this.rest__Lscala_Function0()
});
/** @constructor */
ScalaJS.inheritable.scala_util_control_TailCalls$Call = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_control_TailCalls$Call.prototype = ScalaJS.c.scala_util_control_TailCalls$Call.prototype;
ScalaJS.is.scala_util_control_TailCalls$Call = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_control_TailCalls$Call)))
});
ScalaJS.as.scala_util_control_TailCalls$Call = (function(obj) {
  if ((ScalaJS.is.scala_util_control_TailCalls$Call(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.control.TailCalls$Call")
  }
});
ScalaJS.isArrayOf.scala_util_control_TailCalls$Call = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_control_TailCalls$Call)))
});
ScalaJS.asArrayOf.scala_util_control_TailCalls$Call = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_control_TailCalls$Call(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.control.TailCalls$Call;", depth)
  }
});
ScalaJS.data.scala_util_control_TailCalls$Call = new ScalaJS.ClassTypeData({
  scala_util_control_TailCalls$Call: 0
}, false, "scala.util.control.TailCalls$Call", ScalaJS.data.scala_util_control_TailCalls$TailRec, {
  scala_util_control_TailCalls$Call: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_util_control_TailCalls$TailRec: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_control_TailCalls$Call.prototype.$classData = ScalaJS.data.scala_util_control_TailCalls$Call;
//@ sourceMappingURL=TailCalls$Call.js.map
