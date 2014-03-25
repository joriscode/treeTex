/** @constructor */
ScalaJS.c.scala_xml_parsing_FatalError = (function() {
  ScalaJS.c.java_lang_RuntimeException.call(this);
  this.msg$4 = null
});
ScalaJS.c.scala_xml_parsing_FatalError.prototype = new ScalaJS.inheritable.java_lang_RuntimeException();
ScalaJS.c.scala_xml_parsing_FatalError.prototype.constructor = ScalaJS.c.scala_xml_parsing_FatalError;
ScalaJS.c.scala_xml_parsing_FatalError.prototype.msg__T = (function() {
  return this.msg$4
});
ScalaJS.c.scala_xml_parsing_FatalError.prototype.copy__T__Lscala_xml_parsing_FatalError = (function(msg) {
  return new ScalaJS.c.scala_xml_parsing_FatalError().init___T(msg)
});
ScalaJS.c.scala_xml_parsing_FatalError.prototype.copy$default$1__T = (function() {
  return this.msg__T()
});
ScalaJS.c.scala_xml_parsing_FatalError.prototype.productPrefix__T = (function() {
  return "FatalError"
});
ScalaJS.c.scala_xml_parsing_FatalError.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_xml_parsing_FatalError.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.msg__T();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_parsing_FatalError.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_parsing_FatalError.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_parsing_FatalError(x$1)
});
ScalaJS.c.scala_xml_parsing_FatalError.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_xml_parsing_FatalError.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_xml_parsing_FatalError(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var FatalError$1 = ScalaJS.as.scala_xml_parsing_FatalError(x$1);
      return (ScalaJS.anyRefEqEq(this.msg__T(), FatalError$1.msg__T()) && FatalError$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_xml_parsing_FatalError.prototype.init___T = (function(msg) {
  this.msg$4 = msg;
  ScalaJS.c.java_lang_RuntimeException.prototype.init___T.call(this, msg);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_parsing_FatalError.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_parsing_FatalError.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_parsing_FatalError.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_parsing_FatalError.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_parsing_FatalError.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_parsing_FatalError.prototype.copy__T__ = (function(msg) {
  return this.copy__T__Lscala_xml_parsing_FatalError(msg)
});
ScalaJS.c.scala_xml_parsing_FatalError.prototype.msg__ = (function() {
  return this.msg__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_parsing_FatalError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_parsing_FatalError.prototype = ScalaJS.c.scala_xml_parsing_FatalError.prototype;
ScalaJS.is.scala_xml_parsing_FatalError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_parsing_FatalError)))
});
ScalaJS.as.scala_xml_parsing_FatalError = (function(obj) {
  if ((ScalaJS.is.scala_xml_parsing_FatalError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.parsing.FatalError")
  }
});
ScalaJS.isArrayOf.scala_xml_parsing_FatalError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_parsing_FatalError)))
});
ScalaJS.asArrayOf.scala_xml_parsing_FatalError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_parsing_FatalError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.parsing.FatalError;", depth)
  }
});
ScalaJS.data.scala_xml_parsing_FatalError = new ScalaJS.ClassTypeData({
  scala_xml_parsing_FatalError: 0
}, false, "scala.xml.parsing.FatalError", ScalaJS.data.java_lang_RuntimeException, {
  scala_xml_parsing_FatalError: 1,
  scala_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_parsing_FatalError.prototype.$classData = ScalaJS.data.scala_xml_parsing_FatalError;
//@ sourceMappingURL=FatalError.js.map
