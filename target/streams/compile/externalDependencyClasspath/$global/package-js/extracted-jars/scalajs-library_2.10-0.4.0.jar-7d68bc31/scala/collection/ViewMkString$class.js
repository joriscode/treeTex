ScalaJS.impls.scala_collection_ViewMkString$class__thisSeq__Lscala_collection_ViewMkString__Lscala_collection_Seq = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_ArrayBuffer().init___().$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_ArrayBuffer(ScalaJS.as.scala_collection_TraversableOnce($$this)).result__Lscala_collection_mutable_ArrayBuffer()
});
ScalaJS.impls.scala_collection_ViewMkString$class__mkString__Lscala_collection_ViewMkString__T = (function($$this) {
  return ScalaJS.as.scala_collection_TraversableOnce($$this).mkString__T__T("")
});
ScalaJS.impls.scala_collection_ViewMkString$class__mkString__Lscala_collection_ViewMkString__T__T = (function($$this, sep) {
  return ScalaJS.as.scala_collection_TraversableOnce($$this).mkString__T__T__T__T("", sep, "")
});
ScalaJS.impls.scala_collection_ViewMkString$class__mkString__Lscala_collection_ViewMkString__T__T__T__T = (function($$this, start, sep, end) {
  return $$this.thisSeq__Lscala_collection_Seq().addString__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder(new ScalaJS.c.scala_collection_mutable_StringBuilder().init___(), start, sep, end).toString__T()
});
ScalaJS.impls.scala_collection_ViewMkString$class__addString__Lscala_collection_ViewMkString__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder = (function($$this, b, start, sep, end) {
  var first = new ScalaJS.c.scala_runtime_BooleanRef().init___Z(true);
  b.append__T__Lscala_collection_mutable_StringBuilder(start);
  ScalaJS.as.scala_collection_generic_GenericTraversableTemplate($$this).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(first$1, b$1, sep$1) {
    return (function(x) {
      if (first$1.elem$1) {
        first$1.elem$1 = false;
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      } else {
        b$1.append__T__Lscala_collection_mutable_StringBuilder(sep$1)
      };
      return b$1.append__O__Lscala_collection_mutable_StringBuilder(x)
    })
  })(first, b, sep)));
  b.append__T__Lscala_collection_mutable_StringBuilder(end);
  return b
});
ScalaJS.impls.scala_collection_ViewMkString$class__$init$__Lscala_collection_ViewMkString__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=ViewMkString$class.js.map
