/** @constructor */
ScalaJS.c.scala_StringContext = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.parts$1 = null
});
ScalaJS.c.scala_StringContext.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_StringContext.prototype.constructor = ScalaJS.c.scala_StringContext;
ScalaJS.c.scala_StringContext.prototype.parts__Lscala_collection_Seq = (function() {
  return this.parts$1
});
ScalaJS.c.scala_StringContext.prototype.checkLengths__Lscala_collection_Seq__V = (function(args) {
  if ((this.parts__Lscala_collection_Seq().length__I() !== (args.length__I() + 1))) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T("wrong number of arguments for interpolated string")
  }
});
ScalaJS.c.scala_StringContext.prototype.s__Lscala_collection_Seq__T = (function(args) {
  return this.standardInterpolator__Lscala_Function1__Lscala_collection_Seq__T(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(str) {
      return ScalaJS.modules.scala_StringContext().treatEscapes__T__T(str)
    })
  })()), args)
});
ScalaJS.c.scala_StringContext.prototype.raw__Lscala_collection_Seq__T = (function(args) {
  return this.standardInterpolator__Lscala_Function1__Lscala_collection_Seq__T(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x) {
      return ScalaJS.as.java_lang_String(ScalaJS.modules.scala_Predef().identity__O__O(x))
    })
  })()), args)
});
ScalaJS.c.scala_StringContext.prototype.standardInterpolator__Lscala_Function1__Lscala_collection_Seq__T = (function(process, args) {
  this.checkLengths__Lscala_collection_Seq__V(args);
  var pi = this.parts__Lscala_collection_Seq().iterator__Lscala_collection_Iterator();
  var ai = args.iterator__Lscala_collection_Iterator();
  var bldr = new ScalaJS.c.java_lang_StringBuilder().init___T(ScalaJS.as.java_lang_String(process.apply__O__O(pi.next__O())));
  while (ai.hasNext__Z()) {
    bldr.append__O__Ljava_lang_StringBuilder(ai.next__O());
    bldr.append__T__Ljava_lang_StringBuilder(ScalaJS.as.java_lang_String(process.apply__O__O(pi.next__O())))
  };
  return bldr.toString__T()
});
ScalaJS.c.scala_StringContext.prototype.productPrefix__T = (function() {
  return "StringContext"
});
ScalaJS.c.scala_StringContext.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_StringContext.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.parts__Lscala_collection_Seq();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_StringContext.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_StringContext.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_StringContext(x$1)
});
ScalaJS.c.scala_StringContext.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_StringContext.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_StringContext.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_StringContext(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var StringContext$1 = ScalaJS.as.scala_StringContext(x$1);
      return (ScalaJS.anyRefEqEq(this.parts__Lscala_collection_Seq(), StringContext$1.parts__Lscala_collection_Seq()) && StringContext$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_StringContext.prototype.init___Lscala_collection_Seq = (function(parts) {
  this.parts$1 = parts;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_StringContext.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_StringContext.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_StringContext.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_StringContext.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_StringContext.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_StringContext.prototype.standardInterpolator__Lscala_Function1__Lscala_collection_Seq__ = (function(process, args) {
  return this.standardInterpolator__Lscala_Function1__Lscala_collection_Seq__T(process, args)
});
ScalaJS.c.scala_StringContext.prototype.raw__Lscala_collection_Seq__ = (function(args$2) {
  return this.raw__Lscala_collection_Seq__T(args$2)
});
ScalaJS.c.scala_StringContext.prototype.s__Lscala_collection_Seq__ = (function(args$3) {
  return this.s__Lscala_collection_Seq__T(args$3)
});
ScalaJS.c.scala_StringContext.prototype.checkLengths__Lscala_collection_Seq__ = (function(args$4) {
  return ScalaJS.bV(this.checkLengths__Lscala_collection_Seq__V(args$4))
});
ScalaJS.c.scala_StringContext.prototype.parts__ = (function() {
  return this.parts__Lscala_collection_Seq()
});
/** @constructor */
ScalaJS.inheritable.scala_StringContext = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_StringContext.prototype = ScalaJS.c.scala_StringContext.prototype;
ScalaJS.is.scala_StringContext = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_StringContext)))
});
ScalaJS.as.scala_StringContext = (function(obj) {
  if ((ScalaJS.is.scala_StringContext(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.StringContext")
  }
});
ScalaJS.isArrayOf.scala_StringContext = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_StringContext)))
});
ScalaJS.asArrayOf.scala_StringContext = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_StringContext(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.StringContext;", depth)
  }
});
ScalaJS.data.scala_StringContext = new ScalaJS.ClassTypeData({
  scala_StringContext: 0
}, false, "scala.StringContext", ScalaJS.data.java_lang_Object, {
  scala_StringContext: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_StringContext.prototype.$classData = ScalaJS.data.scala_StringContext;
//@ sourceMappingURL=StringContext.js.map
